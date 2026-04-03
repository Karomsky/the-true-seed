# Changelog

All notable changes to the *The True Seed* platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2026-04-02
### Added
- **Full Spanish Localization**: Completed Spanish translations for all 45 lessons including:
  - Quiz Titles, Questions, Options, and Explanations.
  - MDX Frontmatter (titles, search keywords, summaries).
  - Central UI translation dictionary (`src/translations.ts`).
- **New Documentation System**: Initialized a structured `/docs` directory for project documentation.
- **Certificate Support**: Added Spanish and Tagalog support to the `generateCertificate` utility.

### Fixed
- **Study Registry Cleanup**: Removed redundant `titleEs` and `titleTl` declarations in `src/data/lessons.tsx` in favor of dynamic frontmatter imports.
- **Certificate Metadata**: Changed "38 modules" to a more generic "all theological modules" to support future lesson growth.

### Changed
- **Timeline Refactor**: Moved hardcoded timeline strings into localized JSON objects in `App.tsx`.

## [0.2.0] - 2026-03-22
### Added
- **Phase 3 Implementations**:
  - Unified SEO meta tags using `react-helmet-async`.
  - Initial `Vitest` unit test setup for critical server and client-side logic.
- **Bookmark System**: Allow users to save lessons locally in their browser.
- **Achievement Badges**: Visual indicators for completed modules and mastered quizzes.

## [0.1.0] - 2026-02-28
### Added
- **Initial MVP Release**:
  - Core lesson engine with 23 initial modules.
  - Interactive scripture hover system.
  - Bilingual support (English & Tagalog).

---

*Last Updated: April 2, 2026*
