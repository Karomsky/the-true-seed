import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import QuizComponent from '../src/components/QuizComponent';
import { Quiz } from '../src/types/study';

const mockQuiz: Quiz = {
    title: "Test Quiz",
    questions: [
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            correctIndex: 1,
            explanation: "Basic math tells us 2 + 2 = 4."
        },
        {
            question: "Which color is the sky?",
            options: ["Blue", "Green", "Red", "Yellow"],
            correctIndex: 0,
            explanation: "Rayleigh scattering makes the sky blue."
        }
    ]
};

describe('QuizComponent', () => {
    const mockOnHover = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders the first question correctly', () => {
        render(<QuizComponent quiz={mockQuiz} lang="en" onHover={mockOnHover} />);
        expect(screen.getByText('Lesson Quiz: Test Quiz')).toBeInTheDocument();
        expect(screen.getByText('Question 1 of 2')).toBeInTheDocument();
        expect(screen.getByText('What is 2 + 2?')).toBeInTheDocument();
    });

    it('evaluates correct vs incorrect answers and updates score appropriately', () => {
        render(<QuizComponent quiz={mockQuiz} lang="en" onHover={mockOnHover} />);

        // Choose the correct answer: 4 (Index 1)
        const btnChoice = screen.getByText('4');
        fireEvent.click(btnChoice);

        // It should now show feedback
        expect(screen.getByText('Explanation:')).toBeInTheDocument();
        expect(screen.getByText((content) => content.includes('Basic math tells us'))).toBeInTheDocument();

        // Click Next
        fireEvent.click(screen.getByText('Next Question'));

        // We are now on Question 2
        expect(screen.getByText('Question 2 of 2')).toBeInTheDocument();
        expect(screen.getByText('Which color is the sky?')).toBeInTheDocument();

        // Choose the wrong answer: Green (Index 1)
        fireEvent.click(screen.getByText('Green'));

        // Check we get the finish button
        expect(screen.getByText('Explanation:')).toBeInTheDocument();
        fireEvent.click(screen.getByText('Finish Quiz'));

        // We should be on the completion screen, showing score 1/2
        expect(screen.getByText('Quiz Complete!')).toBeInTheDocument();
        expect(screen.getByText('1')).toBeInTheDocument(); // The score achieved
    });

    it('locks choices after selection to prevent multi-clicking hacks', () => {
        render(<QuizComponent quiz={mockQuiz} lang="en" onHover={mockOnHover} />);

        // Choose the wrong answer first
        fireEvent.click(screen.getByText('3'));

        // Now try to select the right answer
        fireEvent.click(screen.getByText('4'));

        // The finish screen will show a score of 0 because only the first click matters
        fireEvent.click(screen.getByText('Next Question'));
        fireEvent.click(screen.getByText('Red')); // wrong again
        fireEvent.click(screen.getByText('Finish Quiz'));

        expect(screen.getByText('0')).toBeInTheDocument(); // Score is 0
    });
});
