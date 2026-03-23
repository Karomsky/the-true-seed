import { test, expect } from '@playwright/test';

test.describe('The True Seed E2E', () => {
    test('homepage has correct title and accessible navigation', async ({ page }) => {
        await page.goto('/');

        // Check title
        await expect(page).toHaveTitle(/The True Seed/);

        // Check navigation element presence
        await expect(page.getByRole('link', { name: /Theology/i }).first()).toBeVisible();

        // Click 'Study Center' to navigate
        await page.getByRole('button', { name: /Study Center/i }).first().click();

        // Ensure the study page loaded by checking for the search bar or headings
        await expect(page.locator('input[type="text"]')).toBeVisible();
    });

    test('contact form submission and validation', async ({ page }) => {
        await page.goto('/#contact');

        // Check form presence
        const nameInput = page.getByLabel(/Full Name/i);
        const emailInput = page.getByLabel(/Email Address/i);
        const messageInput = page.getByLabel(/Your Message/i);

        await expect(nameInput).toBeVisible();
        await expect(emailInput).toBeVisible();
        await expect(messageInput).toBeVisible();

        // Trigger validation
        await page.getByRole('button', { name: /Send Inquiry|Ipadala ang Inquiry/i }).click();
        await expect(page.getByText(/Name must be at least 2 characters long/i)).toBeVisible();
    });
});
