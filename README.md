# Frontend Developer Showcase

The primary focus on this repository was for styling to be unique & eye-catching, UX to be functional and logical, and performance high. Please run the code as per instructions at the end of this document to view the complete application, and see snippets near the end.

Notable additional efforts were made to adhere not only to personal coding style & preferences, but also to industry standards. This repo was treated **as though it was a production-connected codebase with releases patterns & the relevant git standards & code quality.**

**CODE:**
- Code is adheres to KISS & DRY principles, with each piece of functional logic contained within their own functional component or function declaration.
- CSS classnames are descriptive and understandable
- Component & function names are understandable, low cognitive load for maintainance.
- Prettier code formatter was utilised to further improve readibility & mantainibility of the rpo, a
- Unused imports, variable definitions & all console errors were dealt with to keep the repo clean and minimalist

**Frontend considerations**
Special considerations were made for usability, modernity & accessibility of the web-app:
- fully responsive for all screen sizes, from desktop to mobile
- High contrast text/background for the vision-impaired
- Use of materialUI components where possible to make use to built-in aria accesibility items (such as hover animations, focus animations, aria-labels)
- Chosen aesthetic follows modern frontend design standards, such as the use of glassmorphic cards, high quality full width images, fully responsive components, hover animations, clear & minimalist branding etc
- Clear indication of loading state on pagination buttons when call to action items are clicked (use artificial network throttling in dev-tools to see this in action)

**CI/CD**
- Pull requests were chunked logically according to feature or component (See PR & branch history for evidence of this - no pull requests or branches were deleted for this purpose)
- Pull requests had full descriptions of changes, checklists & relevant tags
- Git branching & merging followed standard **feature branch** -> **develop branch** -> **main branch** pattern
- After each release to the main branch, the branch was tagged with a version number following the **major.minor.patch** pattern, and auto-generated release notes were included for each




DESKTOP:

![image](https://github.com/SooMash/spacex-launches/assets/100480504/2fecc9a7-54d0-46d2-b894-3925afaf60ba)
MOBILE:

![image](https://github.com/SooMash/spacex-launches/assets/100480504/900bb2e6-6028-436e-884e-6b3fbb33d86c)


Below is an example launch object:

```json
{
    "links": {
        "patch": {
            "small": "https://images2.imgbox.com/ae/3c/yVvE2vVh_o.png",
            "large": "https://images2.imgbox.com/82/c7/bbs0gt88_o.png"
        },
        "reddit": {
            "campaign": null,
            "launch": "http://www.reddit.com/r/spacex/comments/22zo8c",
            "media": null,
            "recovery": null
        },
        "flickr": {
            "small": [],
            "original": [
                "https://farm8.staticflickr.com/7615/16670240949_8d43db0e36_o.jpg",
                "https://farm9.staticflickr.com/8597/16856369125_e97cd30ef7_o.jpg",
                "https://farm8.staticflickr.com/7586/16166732954_9338dc859c_o.jpg",
                "https://farm8.staticflickr.com/7603/16855223522_462da54e84_o.jpg",
                "https://farm8.staticflickr.com/7618/16234010894_e1210ec300_o.jpg",
                "https://farm8.staticflickr.com/7617/16855338881_69542a2fa9_o.jpg"
            ]
        },
        "presskit": "http://www.spacex.com/sites/spacex/files/spacexcrs-3_presskit_042014.pdf",
        "webcast": "https://www.youtube.com/watch?v=Od-lON4bTyQ",
        "youtube_id": "Od-lON4bTyQ",
        "article": "https://newatlas.com/crs-3-launch-spacex/31671/",
        "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_CRS-3"
    },
    "rocket": {
        "height": {
            "meters": 70,
            "feet": 229.6
        },
        "diameter": {
            "meters": 3.7,
            "feet": 12
        },
        "mass": {
            "kg": 549054,
            "lb": 1207920
        },
        "flickr_images": [
            "https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg",
            "https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg",
            "https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg",
            "https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg",
            "https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg",
            "https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg"
        ],
        "name": "Falcon 9",
        "type": "rocket",
        "description": "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.",
        "id": "5e9d0d95eda69973a809d1ec"
    },
    "crew": [],
    "capsules": [
        {
            "serial": "C105",
            "status": "unknown",
            "type": "Dragon 1.1",
            "id": "5e9e2c5bf3591859a63b2668"
        }
    ],
    "payloads": [
        {
            "name": "CRS-3",
            "type": "Dragon 1.1",
            "orbit": "ISS",
            "reference_system": "geocentric",
            "regime": "low-earth",
            "id": "5eb0e4bbb6c3bb0006eeb1f1"
        }
    ],
    "launchpad": {
        "name": "CCSFS SLC 40",
        "full_name": "Cape Canaveral Space Force Station Space Launch Complex 40",
        "locality": "Cape Canaveral",
        "region": "Florida",
        "latitude": 28.5618571,
        "longitude": -80.577366,
        "details": "SpaceX's primary Falcon 9 pad, where all east coast Falcon 9s launched prior to the AMOS-6 anomaly. Previously used alongside SLC-41 to launch Titan rockets for the US Air Force, the pad was heavily damaged by the AMOS-6 anomaly in September 2016. It returned to flight with CRS-13 on December 15, 2017, boasting an upgraded throwback-style Transporter-Erector modeled after that at LC-39A.",
        "id": "5e9e4501f509094ba4566f84"
    },
    "flight_number": 14,
    "name": "CRS-3",
    "date_utc": "2014-04-18T19:25:00.000Z",
    "id": "5eb87ce4ffd86e000604b337"
}

```

### Available Scripts

In the project directory, you can run the standard React scripts:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Test commmit #1 in new remote SSH-key linked repo
Test commmit #2 in new remote SSH-key linked repo
