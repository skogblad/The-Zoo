# ZooZoom

ZooZoom is an interactive web application built in React that allows users to explore a virtual zoo. Users can view a homepage with featured animals, browse a list of all animals, and see detailed information about each animal. Each animal has a feeding schedule that users can interact with, with visual indicators showing whether the animal is hungry, getting hungry, or satisfied.
All animal data is fetched from a public API: https://animals.azurewebsites.net/api/animals

## Features

**1. Homepage** – Explore featured animals and navigate to the full animal list.

**2. Animal List** – Browse all animals, see their status, and click to view details.

**3. Animal Detail Page** – Read full details, see feeding status, and feed animals following the rules.

## Feeding Rules

| Context     | Hours Since Last Feeding | Indicator / Button                        |
| ----------- | ------------------------ | ----------------------------------------- |
| Detail Page | < 3 hours                | Button disabled, animal satisfied         |
| Detail Page | 3–4 hours                | Button disabled, “getting hungry” warning |
| Detail Page | ≥ 4 hours                | Button enabled                            |
| List Page   | < 3 hours                | Animal satisfied                          |
| List Page   | 3–5 hours                | “Getting hungry” warning                  |
| List Page   | ≥ 5 hours                | “Needs feeding” indicator                 |

## Tech

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![ReactRouter](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

## Screenshot

#### Front page:

![front_page](/zoozoom.jpg)

<details>
<summary><strong>See more</strong> <i>(2 images)</i></summary>

##### All animals page:

![animal_list_page](/zoozoom_list.jpg)

#### Detailed page:

![detail_page](/zoozoom_detail.jpg)

</details>
