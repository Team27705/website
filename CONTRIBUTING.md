# Contributing to the ByteKnights Website

If you're a member of the ByteKnights, hello! Thank you for helping keep the ByteKnights website up to date! You do not need to be a programmer to update the team information, events, awards, sponsors, FAQs, or other website content.

## Where the website content lives

Most editable website content is kept in
[`src/lib/data.ts`](./src/lib/data.ts). Keeping the information in one place
makes updates easier and helps prevent the same information from being copied
into several pages.

The file contains:

- Team departments and team members
- Upcoming and past events
- Awards
- Sponsors
- Frequently asked questions and answers
- Navigation menu labels and descriptions
- FAQ contact information
- The team story

## The easiest way to make an update

You can edit the file directly on GitHub:

1. Open [`src/lib/data.ts`](./src/lib/data.ts).
2. Click the pencil **Edit this file** button.
3. Find the section you want to update.
4. Change only the information that needs changing.
5. Scroll to the bottom of the page.
6. In the commit message box, briefly describe the change, such as
   `Update team members`.
7. Choose **Commit directly to the `main` branch**.
8. Click **Commit changes**.

## How to edit each section

The data is stored in JSON (JavaScript Object Notation), which is a human and computer readable way to store information.

### Team members

Each team member has:

- `image`: the image filename in `public/team/`
- `name`: the name shown on the website
- `department`: one of the existing departments
- `role`: an optional role, such as `Programming Lead`

Example:

```ts
{
  image: "/team/example.jpg",
  name: "Example Student",
  department: "Programming",
  role: "Programming Lead",
},
```

If you add a new image, make sure the image is uploaded to
[`public/team/`](./public/team/) and that the filename matches the `image`
value exactly. File names are case-sensitive.

When removing a person, remove the entire block between the braces, including
the comma after the block.

### Events

Each event has:

- `name`: the event name
- `date`: use `YYYY-MM-DD`, such as `2026-03-04`
- `locationName`: the venue or location name
- `locationAddress`: the complete address
- `description`: a short explanation of the event
- `type`: one of `QUALI`, `SUPERQUALI`, `CHAMPS`, `SCRIM`, or `LOCAL`

Example:

```ts
{
  name: "Brooklyn Qualifier",
  date: "2026-11-14",
  locationName: "Brooklyn Technical High School",
  locationAddress: "29 Fort Greene Pl, Brooklyn, NY 11217, United States",
  description: "Our team competes in the Brooklyn qualifier.",
  type: "QUALI",
},
```

### Awards

Each award has:

- `season`: usually `decode` or `into-the-deep`
- `eventName`: the event where the award was received
- `title`: the award and placement

### Sponsors

Each sponsor has a required `name` and optional `logo` and `website`.

Logo files belong in [`public/sponsors/`](./public/sponsors/). Use the full
path beginning with `/sponsors/` in the `logo` field.

### FAQs

Add or update FAQ entries in the `FAQItems` list. Each entry needs a
`question` and an `answer`.

The `FAQContacts` section contains the people and email addresses shown under
the “more questions” FAQ entry. Please double-check that contact information
is correct before submitting it.

### Navigation and the team story

`NavigationItems` controls the links shown in the website menu. `TeamStory`
controls the story paragraph on the home page.

## Important formatting rules

- Keep the punctuation and quotation marks around property names and text.
- Put a comma after each item in a list.
- Use double quotes for text values.
- Do not rename a section or property unless you know the website code has
  also been updated.
- Do not put passwords, private keys, or other confidential information in
  this file or anywhere in the repository.

## Before submitting a pull request

Please check that:

- Names, dates, addresses, links, and email addresses are correct.
- Any new image has been added to the correct `public/` folder.
- The file still looks similar to the surrounding entries.
- Your commit message describes what changed.

If GitHub reports a formatting or build error, do not worry. Ask a teammate
who is familiar with the project to help investigate it rather than making
many additional changes at once. Since changes go directly to `main`, be
especially careful to review the edit before committing it.

## What is `CONTRIBUTING.md`?

`CONTRIBUTING.md` is the standard filename many GitHub projects use for
instructions to people who want to make changes. GitHub recognizes it and
shows it as guidance to contributors. This file is intentionally written for
the ByteKnights team and explains the small set of changes teammates are most
likely to make.
