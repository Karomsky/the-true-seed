# The True Seed — Multi-Language Support Guide

This document defines the **Three-Tier Language System** (English, Tagalog, and Spanish) supporting the project.

## 1. The `lz` Helper Pattern
In the lesson registry (`src/data/lessons.tsx`), we use the `lz(en, tl, es)` helper function to dynamically select content based on the user's active language state.

```tsx
// Example usage in Quiz Modules
{
  question: lz(
    "How many Gods are there?",      // English
    "Ilan ang Diyos?",               // Tagalog
    "¿Cuántos Dioses hay?"           // Spanish
  ),
  // ...
}
```

### Feature Breakdown:
- **Dynamic Content Injection**: Lesson content is rendered via MDX components that accept a `lang` prop to toggle between translations.
- **Search Engine Synchronization**: Search keywords and content are indexed in all three languages, allowing Spanish-speaking users to find lessons using Spanish terms.
- **Frontmatter Registry**: We've refactored the lesson frontmatter to include `titleEs`, `searchKeywordsEs`, and `searchContentEs` as standard fields.

## 2. Frontmatter Standard
Each lesson's MDX file must include the following metadata for full localization:

```yaml
---
title: "The Divine Revelation"
titleTl: "Ang Banal na Pahayag"
titleEs: "La Revelación Divina"
category: "bible"
icon: "Zap"
searchKeywords: "prophets revelation finger of god"
searchKeywordsTl: "propeta pahayag daliri ng diyos"
searchKeywordsEs: "profetas revelación dedo de Dios"
searchContent: "Summary in English..."
searchContentTl: "Buod sa Tagalog..."
searchContentEs: "Resumen en Español..."
---
```

## 3. Deployment Readiness
The codebase is now fully prepared for Spanish-speaking regions.

### Key Considerations:
- **Fallback Logic**: The `t()` translation function (found in `src/translations.ts`) defaults to English if a specific Spanish key is missing.
- **Scripture Integration**: The `ScriptureLink` component remains language-agnostic by fetching the correct localized variant for the current user language.

---

*Last Updated: April 2, 2026*
