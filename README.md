![Code Institute logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

![Brew Barberista logo and nav bar](docs/images/screenshots/nav/brew-barberista-branded-navbar-with-logo.png)

![Brew Barberista responsive header device mockups](docs/images/screenshots/mockups/brew-barberista-header.png)

#### [Live link to deployed project](https://loosenthedark.github.io/brew-barberista) (hosted on GitHub Pages)

[Brew Barberista](http://brewbarberista.ie/) is a thriving independent coffee shop and barber in North Dublin. Opening its doors at the height of lockdown, the business has not only survived this period of uncertainty, it has established itself as a community hub, showcasing the best of local produce as well as selling art and literature from Dublin-based creatives.

While the company has made good use of social media (notably [Instagram](https://www.instagram.com/brewbarberista/)) throughout its early days, one thing the pandemic has brought home to business owners everywhere is the importance of building a robust and reliable online presence - something that can remain as a proverbial shop window for customers if and when physical premises might have to close their doors due to Covid restrictions.

At the time of writing, the company's [existing site](http://brewbarberista.ie/) appears to be unfinished, while it is also displaying out-of-date information about opening hours etc. (last updated in December 2020). In addition, its design falls well short of being sufficiently responsive for today's mobile-first consumer landscape:

mobile  |  tablet  |  desktop
:-------------------------:|:-------------------------:|:-------------------------:
[Home](docs/images/screenshots/old-site/brew-barberista-home-mobile.png)  |  [Home](docs/images/screenshots/old-site/brew-barberista-home-tablet.png) |  [Home](docs/images/screenshots/old-site/brew-barberista-home-desktop.png)
[Brew Coffee](docs/images/screenshots/old-site/brew-barberista-coffee-mobile.png)  |  [Brew Coffee](docs/images/screenshots/old-site/brew-barberista-coffee-tablet.png) |  [Brew Coffee](docs/images/screenshots/old-site/brew-barberista-coffee-desktop.png)
[Brew Barber](docs/images/screenshots/old-site/brew-barberista-barber-mobile.png)  |  [Brew Barber](docs/images/screenshots/old-site/brew-barberista-barber-tablet.png) |  [Brew Barber](docs/images/screenshots/old-site/brew-barberista-barber-desktop.png)

> Brew Barberista old website screenshots

Add to all of this the ongoing [#DeleteFacebook](https://twitter.com/search?q=%23DeleteFacebook) movement and growing public concern over the lack of privacy across SNSs, and there is clearly a need for Brew Barberista to consolidate its brand identity and ties to the community by creating a bright and engaging standalone website.

## User Experience (UX)

This [**Brew Barberista**](https://loosenthedark.github.io/brew-barberista) rebuild is a fully-responsive frontend website, offering users a visually appealing overview of the business's [services](https://loosenthedark.github.io/brew-barberista/#about), [local partnerships](https://loosenthedark.github.io/brew-barberista/#partners) and [core values](https://loosenthedark.github.io/brew-barberista/#more-info). Both first-time and returning visitors will be impressed by the site's mobile-first design as well as its intuitive navigation and layout, while their knowledge of Brew Barberista's offerings and message will be enriched by the site's informative and regularly-updated content.

### User stories:

#### User goals (general visitor to the site):



#### Developer goals:



## Project design

### Colour scheme:

![Brew Barberista colour scheme (Coolors palette) screenshot](docs/images/screenshots/brew-barberista-colour-scheme.png)

### Typography:

- #### Primary font...

  - Family: [Poppins](https://fonts.google.com/specimen/Poppins)
  - Weights: 300, 400, 500
  - Fallback: `sans-serif`

- #### Secondary (Heading) font...

  - Family: [Lora](https://fonts.google.com/specimen/Lora)
  - Weights: 600, 700
  - Fallback: `serif`

### Wireframes:



## Features

### Existing features:

- #### Navigation:

  - ##### Fixed Navigation Bar:

  <details>
  <summary>
  click to view
  </summary>

  ![](docs/images/screenshots/nav/nav-bar-mobile.png)  |  ![](docs/images/screenshots/nav/nav-bar-tablet.png)  |  ![](docs/images/screenshots/nav/nav-bar-tablet.png)
  :-------------------------:|:-------------------------:|:-------------------------:
  mobile  |  tablet |  desktop

    - There is a full-width nav bar fixed to the top of the viewport on all device sizes
    - The site's core navigation menu is hidden off-canvas initially to create a spacious feel across the landing area, where the user is greeted by the Brew Barberista `.navbar-logo` on the left-hand side and a `.navbar-toggler` button (aka 'hamburger icon') to the right (see screenshots above)
    - This logo is a modified version of the one featured in the nav bar of [the business's existing website](http://brewbarberista.ie/)
    - The ['space cadet' dark blue and 'old gold' colours that make up this logo](http://brewbarberista.ie/resources/Circular%20logo.jpg) directly inform this project's primary palette. A lighter shade of 'cyan process' blue [(featured throughout the current site's `footer`, for instance)](https://loosenthedark.github.io/brew-barberista#contact) is taken directly from [the premises' brightly-painted shopfront](https://www.facebook.com/photo/?fbid=190590879506085&set=a.190590812839425).
  </details>

  - ##### (Off-Canvas) Navigation Menu:

  <details>
  <summary>
  click to view
  </summary>

  ![](docs/images/screenshots/nav/navbar-nav-mobile.png)  |  ![](docs/images/screenshots/nav/navbar-nav-tablet.png)  |  ![](docs/images/screenshots/nav/navbar-nav-desktop.png)
  :-------------------------:|:-------------------------:|:-------------------------:
  mobile  |  tablet |  desktop

    - The off-canvas `navbar-nav` menu mentioned above can be expanded by clicking on the `.navbar-toggler` button. This functionality has been enabled using custom JavaScript by listening for a relevant user click(s) and sliding the `.navbar-nav` into the viewport with CSS class toggling involving `absolute` positioning and appropriate transition effects. In addition, the icon comprising the `.navbar-toggler` button [animates on click](docs/images/screenshots/nav/nav-toggler-icons-animation.gif) to produce a dynamic yet smooth transition that is both distinctive and pleasing to the eye.
    - The expanded polygon-shaped menu contains links to each of the website's six internal sections containing content (see below), as well as a seventh link entitled 'Press'.
    - Clicking on this triggers an additional absolutely-positioned submenu featuring external links to recent Brew Barberista media appearances. Each of these links opens in a new browser tab due to the `<a>` tag's `target` property being set to `_blank`.
    - The bottom 'Contact' link consists of a cyan call-to-action `button`. In keeping with UX best practices, clicking on any of the links embedded in the `.navbar-nav` will cause the menu to revert to its default off-canvas location as the site navigates to the designated location. Smooth scrolling has been enabled to streamline the navigation experience through use of the `scroll-behavior: smooth;` CSS rule on the document's `body` element.
    - It's worth noting that one further section of the site, a tiled image gallery, is purely decorative, and so no anchor link was deemed necessary.

  ![](docs/images/screenshots/nav/press-list-mobile.png)  |  ![](docs/images/screenshots/nav/press-list-tablet.png)  |  ![](docs/images/screenshots/nav/press-list-desktop.png)
  :-------------------------:|:-------------------------:|:-------------------------:
  mobile  |  tablet |  desktop
  </details>

- #### [Header:](https://loosenthedark.github.io/brew-barberista)
<details>
  <summary>
  click to view
  </summary>

![](docs/images/screenshots/header/header-html-snippet.png)  |  ![](docs/images/screenshots/header/header-css-snippet.png)
:-------------------------:|:-------------------------:
`<header>` HTML code snippet  |  `.hero-header` and `.overlay` CSS code snippets

![](docs/images/screenshots/header/header-mobile.jpg)  |  ![](docs/images/screenshots/header/header-tablet.jpg)  |  ![](docs/images/screenshots/header/header-desktop.gif)
:-------------------------:|:-------------------------:|:-------------------------:
mobile  |  tablet |  desktop

  - ##### Mobile & Tablet (< 992px):

    - The site's above-the-fold real estate on mobile and tablet features a clean, soothing background image of a horizon out to sea. This was chosen due to Brew Barberista's prime [location](https://loosenthedark.github.io/brew-barberista/#location) just off the Howth Road in Raheny and less than a kilometre uphill from the Dublin Bay coast road.
    - On page load this landing area is brought to life using animated hero icons: one of a [takeaway cup of hot coffee](static/images/icons/icon-coffee-takeaway.svg), the other a [silhouette of a man with a striking hairstyle](static/images/icons/icon-silhouette.svg). These icons have been enlarged and had a 'zoom-into-view' `@keyframes icon-reveal` animation effect applied to them in order to capture the visitor's attention and also hint at the services available at Brew Barberista.
    - There is also a gold-coloured downward-pointing chevron icon used to hook the user and encourage them to explore below the fold. This functionality has been enhanced by adding a gentle "bobbing" animation effect in the project's stylesheet

  - ##### Desktop (> 991px):

    - A decision was made to change the `header` area's aesthetic on desktop devices. In place of the background image with animated icons are two short complimentary video backgrounds: one showing [a barista pouring a cup of coffee](static/videos/bg-barista-pour.mp4), the other featuring [a close-up of a barber trimming a customer's hair](static/videos/bg-barber.mp4).
    - Each of these `video` elements has had its `opacity` reduced to keep them from being seen to occupy the foreground (and/or overly distract the user).
    - There has also been an `.overlay` class applied to an absolutely-positioned `div` element that acts as a subtle filter in line with the site's prevailing colour palette
    - One more additional `div` with `background-color` set to semi-opaque blue has had a `clip-path` rule applied to it. This has the effect of creating a symmetrical pair of roughly triangular 'corner areas', each containing an icon and a heading, which act as navigation links to 'Brew Coffee' and 'Brew Barber', respectively.
</details>

- #### [Main:](https://loosenthedark.github.io/brew-barberista/#about)

  - ###### [About `section`:](https://loosenthedark.github.io/brew-barberista/#about)
  <details>
  <summary>
  click to view
  </summary>

  ![](docs/images/screenshots/about/about-mobile.png)  |  ![](docs/images/screenshots/about/about-tablet.png)  |  ![](docs/images/screenshots/about/about-desktop.png)
  :-------------------------:|:-------------------------:|:-------------------------:
  mobile  |  tablet |  desktop

    - The site's first textual content appears in the area immediately below the `header` (referred to as the About section here for the sake of convenience). This `section` is in turn subdivided into two `div`s, [**Brew Coffee**](https://loosenthedark.github.io/brew-barberista/#about) and [**Brew Barber**](https://loosenthedark.github.io/brew-barberista/#barber), each accompanied by eye-catching background imagery and short, snappy summaries of the two sides of Brew Barberista's operations:
  </details>

  - ###### [More Info `section`:](https://loosenthedark.github.io/brew-barberista/#more-info)
  <details>
  <summary>
  click to view
  </summary>

  ![](docs/images/screenshots/more-info/more-info-mobile.png)  |  ![](docs/images/screenshots/more-info/more-info-tablet.png)  |  ![](docs/images/screenshots/more-info/more-info-desktop.png)
  :-------------------------:|:-------------------------:|:-------------------------:
  mobile  |  tablet |  desktop

    - Each About subsection contains a 'More Info' hyperlink, which brings the user to the relevant follow-on subsection for that Brew Barberista service ([Brew Coffee](https://loosenthedark.github.io/brew-barberista/#more-info)/[Brew Barber(https://loosenthedark.github.io/brew-barberista/#get-in-touch)]).
    - These two More Info subsections are stacked on mobile and tablet, and lie side by side on desktop
    - Each panel contains informative blurbs highlighting a variety of USPs offered by Brew Barberista. The text is set against carefully-positioned full-width and -height background images.
    - As screen width increases and space permits, several (initially hidden) elements are revealed across tablet and desktop devices. These include supplementary paragraphs of text and call-to-action `button`s.
    - The 'OUR PARTNERS' CTA `button` (visible on desktop only) in the [Brew Coffee `div`](https://loosenthedark.github.io/brew-barberista/#more-info) directs the user to the [Our Partners `section`](#our-partners-section) of the site, while the 'BOOK NOW' `button` (visible on tablet and desktop) beneath the ['Get in touch' Brew Barber heading](https://loosenthedark.github.io/brew-barberista/#get-in-touch) causes the page to scroll right down to the [`footer`](#footer-aka-contact-section), where the business's [contact details](https://loosenthedark.github.io/brew-barberista/#contact) can be found.
  </details>

  - ###### [Customer Reviews `section`:](https://loosenthedark.github.io/brew-barberista/#customer-reviews)
  <details>
  <summary>
  click to view
  </summary>

  ![](docs/images/screenshots/customer-reviews/customer-reviews-mobile.png)  |  ![](docs/images/screenshots/customer-reviews/customer-reviews-tablet.png)  |  ![](docs/images/screenshots/customer-reviews/customer-reviews-desktop.png)
  :-------------------------:|:-------------------------:|:-------------------------:
  mobile  |  tablet |  desktop

    - The Customer Reviews `section` boasts a selection of reviews from Brew Barberista customers, shining a light on what the business has to offer.
    - Each review consists of a customer avatar, excerpt from that customer's review, customer name and the source from which the review has been taken.
    - Semantic HTML elements have been used here: each review is wrapped inside a `figure` element, with nested `img` (avatar), `blockquote` (review body) and `figcaption` (name and review source) elements.

      ![](docs/images/screenshots/customer-reviews/customer-reviews-html-snippet.png)  |  
      :-------------------------:|
      `<figure>` HTML code snippet   |  

    - As with several other `section`s, the layout has been achieved using a combination of CSS positioning and flexbox on smaller screens, with CSS grid rules applied on desktop.
  </details>

  - ###### Image gallery:
  <details>
  <summary>
  click to view
  </summary>

  ![](docs/images/screenshots/image-gallery/image-gallery-mobile.png)  |  ![](docs/images/screenshots/image-gallery/image-gallery-tablet.png)  |  ![](docs/images/screenshots/image-gallery/image-gallery-desktop.png)
  :-------------------------:|:-------------------------:|:-------------------------:
  mobile  |  tablet |  desktop

    - As stated previously, the (untitled) image gallery is for decorative purposes only
    - A flexible and fluid layout has been achieved with flexbox - more specifically, through use of the `flex-wrap` CSS property
    - The gallery displays as a 2x2 grid on mobile, 3x2 on tablet (two extra image `div`s having had their `display` property toggled from `none` to `block`) and a single row containing four images (each with a `max-height` rule applied when the screen width reaches 1440px) on desktop
  </details>

  - ###### [Our Partners `section`:](https://loosenthedark.github.io/brew-barberista/#partners)

  <details>
  <summary>
  click to view
  </summary>

  ![](docs/images/screenshots/partners/partners-mobile.png)  |  ![](docs/images/screenshots/partners/partners-tablet.png)  |  ![](docs/images/screenshots/partners/partners-desktop.png)
  :-------------------------:|:-------------------------:|:-------------------------:
  mobile  |  tablet |  desktop

    - A similarly fluid approach has been taken for the site's Our Partners `section`, which consists of a grid of logos belonging to companies/organisations that Brew Barberista has either championed or worked alongside
    - Each logo `img` is also a clickable link to the relevant company's website, with all of these external links opening in a new browser tab
    - Due to device width constraints, and in order to avoid generating a cluttered feel, two of the `section`'s twelve `figure` elements are hidden on mobile
  </details>

  - ###### [Location `section`:](https://loosenthedark.github.io/brew-barberista/#location)
  <details>
  <summary>
  click to view
  </summary>

  ![](docs/images/screenshots/location/location-mobile.png)  |  ![](docs/images/screenshots/location/location-tablet.png)  |  ![](docs/images/screenshots/location/location-desktop.png)
  :-------------------------:|:-------------------------:|:-------------------------:
  mobile  |  tablet |  desktop

    - The last `main` `section` before the `footer` is a full-width rendering of the business's location on Google Maps
    - This has been implemented using a straightforward `script` call to the Maps API just inside `index.html`'s closing `<body>` tag
    - Map configuration and rendering is processed in a [`maps.js` file](static/js/maps.js) located in the project's [`js` subdirectory](static/js) of the [`static` directory](static)

      ![](docs/images/screenshots/location/location-js-snippet.png)  |  
      :-------------------------:|
      `maps.js` file JS code snippet   |

    - A `max-width` value of `60rem` has been set on the `.map-container` `div` across desktop devices to prevent the map from sprawling too far horizontally.
    - To create a bespoke and memorable user experience, the default Maps Marker image has been replaced by [a miniature version of the dark blue and gold Brew Barberista circular logo](static/images/icons/pin-brew-barberista.png)
  </details>

- #### [Footer (aka `#contact` section):](https://loosenthedark.github.io/brew-barberista/#contact)
<details>
  <summary>
  click to view
  </summary>

The site's `footer` element is far from an afterthought, as it contains important contact information and social media links for Brew Barberista. There are three main ways the user might arrive here:

  1) By simply scrolling manually through the entire website
  2) By clicking the blue 'CONTACT' call-to-action `button` located at the foot of the [off-canvas `.navbar-nav` navigation menu](#off-canvas-navigation-menu)
  3) By clicking the gold-coloured 'BOOK NOW' CTA button located at the foot of the second [`section#more-info > div`](#more-info-section) on tablet and desktop

As outlined previously, the choice of a bright shade of cyan as the `background-color` for this area was inspired by the actual coat of paint used on [the facade of Brew Barberista's physical premises](https://www.facebook.com/photo/?fbid=190590879506085&set=a.190590812839425) in D5 (_cf._ device mockups `footer` screenshots at the bottom of this `README` document).
</details>

- #### Dynamic 'back-to-top' button (on page scroll):
<details>
  <summary>
  click to view
  </summary>

One other important UX feature is a fixed-position dark-blue button containing an upward-pointing chevron icon that becomes available to the user as a single-click avenue back to the top of the page when they have scrolled more than 500px vertically downwards. This functionality has been put in place by listening out for a `window` [scroll event](https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event) in the project's [`script.js` file](static/js/script.js). The `#btn-back-to-top` element's `display` property is then toggled back and forth between `none` and `block` in order to show/hide the button in the bottom right-hand corner of the viewport.

  ![](docs/images/screenshots/back-to-top/back-to-top-js-snippet.png)  |  ![](docs/images/screenshots/back-to-top/back-to-top-css-snippet.png)
  :-------------------------:|:-------------------------:
  `script.js` file event listener JS code snippet  |  `#btn-back-to-top` CSS code snippet

![](docs/images/screenshots/back-to-top/back-to-top-mobile.png)  |  ![](docs/images/screenshots/back-to-top/back-to-top-tablet.png)  |  ![](docs/images/screenshots/back-to-top/back-to-top-desktop.png)
:-------------------------:|:-------------------------:|:-------------------------:
mobile  |  tablet |  desktop
</details>

### Potential future features:

- #### Favicon

## Technologies Used

### Languages:

- [HTML5:](https://en.wikipedia.org/wiki/HTML5) used for structuring the site
- [CSS3:](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) used for styling the site
- [JavaScript:](https://en.wikipedia.org/wiki/JavaScript) used for site logic and web page behaviour

### Frameworks/Libraries, APIs, Programmes and Tools:

- [Google Fonts:](https://fonts.google.com/) used to import the Poppins and Lora fonts into the project's stylesheets
- [Font Awesome v5.15.3:](https://fontawesome.com/) used to add appropriate and visually appealing site icons
- [Google Maps API](https://developers.google.com/maps) used to provide a visual representation of Brew Barberista's location to site visitors
- [Git:](https://git-scm.com/) used for version control by utilising the Gitpod terminal to commit frequently to Git and push all commits to GitHub
- [GitHub:](https://github.com/) used to compile and remotely store the project's codebase following successive local commits initiated from the command line
- [Balsamiq:](https://balsamiq.com/) used to generate [wireframes](docs/wireframes/flippin-proud-wireframes.pdf) during the project's design phase
- [Adobe Illustrator:](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjHh4e5sIXyAhXP6-0KHS7vASoYABAAGgJkZw&ae=2&ohost=www.google.com&cid=CAESQOD2cD2cs4zu4JpNTapSj1nbDmPmLIo3quvyOOMw9veyz__8LtydqbjQH8HTLrYcgDlnQb6l-F40o-SYGXLD1T0&sig=AOD64_0b1ay7NFSesjZymAaH8gGibU9W0w&q&adurl&ved=2ahUKEwiPv_64sIXyAhW8UBUIHS4nDYMQ0Qx6BAgCEAE) used to convert both Shutterstock vector downloads from `.eps` to the more manageable `.svg` file format
- [TinyJPG:](https://tinyjpg.com/) used for image compression
- [PicResize:](https://picresize.com/) used to crop and resize images

## Testing

### Validation:

### Responsiveness:

### Bugs:


## Deployment

### GitHub Pages:

### Forking the GitHub Repository:

### Making a local clone:

## Credits

### Code:

### Content:



### Media:
<details>
  <summary>
  click to view
  </summary>

| Media title/description  | Media format  | Credit  | Link to original media source(s)  | 
| :------------ |:--------------- |:-----|:---------------|
| **`head`**         |                 |      |                |
| Brew Barberista circular brand logo      | image        | [Brew Barberista](http://brewbarberista.ie/)      | [Brew Barberista website header](http://brewbarberista.ie/resources/Circular%20logo.jpg)      |
| Brew Barberista owner press pic      | photo        | [Frank McGrath](https://www.facebook.com/FrankMcgrathPhotography)      | [Independent.ie](https://www.independent.ie/irish-news/a-cut-above-the-new-barber-offering-a-proper-coffee-while-you-get-your-hair-cut-39820368.html)      |
| **`nav`**         |                 |      |                |
| Brew Barberista main brand logo      | image        | [Brew Barberista](http://brewbarberista.ie/)      | [Brew Barberista website header](http://brewbarberista.ie/resources/Circular%20logo.jpg)      |
| gold hamburger icon      | icon        | [Font Awesome](https://fontawesome.com/license)      | [Font Awesome](https://fontawesome.com/v5.15/icons/bars?style=solid)      |
| gold coffee mug icon      | icon        | [Font Awesome](https://fontawesome.com/license)      | [Font Awesome](https://fontawesome.com/v5.15/icons/mug-hot?style=solid)      |
| **`header`**         |                 |      |                |
| 'Calm Sea Under Blue Sky'      | photo  | [cottonbro](https://www.pexels.com/@cottonbro)      | [Pexels](https://www.pexels.com/photo/calm-sea-under-blue-sky-4571251)      |
| 'Fashion silhouette hipster style'      | vector illustration  | [RomanYa](https://www.shutterstock.com/g/RomanYa)      | [Shutterstock](https://www.shutterstock.com/image-vector/fashion-silhouette-hipster-style-vector-illustration-161463794)      |
| 'Paper mug with hot drink inside'      | vector illustration  | [Agnieszka Karpinska](https://www.shutterstock.com/g/Panptys)      | [Shutterstock](https://www.shutterstock.com/image-vector/paper-mug-hot-drink-inside-vector-322930262)      |
| 'A Barista Making A Coffee Artistically'      | video  | [Ketut Subiyanto](https://www.pexels.com/@ketut-subiyanto)      | [Pexels](https://www.pexels.com/video/a-barista-making-a-coffee-artistically-4378109/)      |
| **`main`**         |                 |      |                |
| 'Cold Brew'      | photo      | [Andrew "Donovan" Valdivia](https://unsplash.com/@donovan_valdivia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)      | [Unsplash](https://unsplash.com/photos/mMI5sdLFoHMt)      |
| 'Anonymous barista pouring milk from jug into paper cup'      | photo  | [Ketut Subiyanto](https://www.pexels.com/@ketut-subiyanto)      | [Pexels](https://www.pexels.com/photo/anonymous-barista-pouring-milk-from-jug-into-paper-cup-4350051/)      |
| barber's kit against orange background      | photo      | [Sinval Carvalho](https://unsplash.com/@sinvalbmx)      | [Unsplash](https://unsplash.com/photos/WbEibGKHBMY)      |
| 'Baked Pastries'      | photo      | [Magda Ehlers](https://www.pexels.com/@magda-ehlers-pexels)      | [Pexels](https://www.pexels.com/photo/baked-pastries-2573870)      |
| 'Brown Coffee Beans on Gray Textile'      | photo      | [Liana Horodetska](https://www.pexels.com/@liana-horodetska-5077625)      | [Pexels](https://www.pexels.com/photo/dawn-caffeine-coffee-dark-7507365/)      |
| 'Crop barista pouring milk froth in cappuccino for client'      | photo      | [Ketut Subiyanto](https://www.pexels.com/@ketut-subiyanto)      | [Pexels](https://www.pexels.com/photo/crop-barista-pouring-milk-froth-in-cappuccino-for-client-4349759/)      |
| 'Man in White and Black Stripe Shirt Holding Black Pen'      | photo      | [cottonbro](https://www.pexels.com/@cottonbro)      | [Pexels](https://www.pexels.com/photo/man-in-white-and-black-stripe-shirt-holding-black-pen-3998429/)      |
| 'White Ceramic Mug With Brown Liquid'      | photo      | [Gareth Rees](https://www.pexels.com/@gareth-rees-2793957)      | [Pexels](https://www.pexels.com/photo/white-ceramic-mug-with-brown-liquid-4334758/)      |
| 'Straight Razor Kit'      | photo      | [Josh Sorenson](https://www.pexels.com/@joshsorenson)      | [Pexels](https://www.pexels.com/photo/straight-razor-kit-995300/)      |
| 'Set of disposable paper coffee cups'      | photo      | [Ketut Subiyanto](https://www.pexels.com/@ketut-subiyanto)      | [Pexels](https://www.pexels.com/photo/set-of-disposable-paper-coffee-cups-4349942/)      |
| customer avatars      | photos        | [UI Faces](https://uifaces.co/license) / [Random User Generator](https://randomuser.me/copyright)      | [#1](https://randomuser.me/api/portraits/women/26.jpg) / [#2](https://uifaces.co/our-content/donated/l1qF9oeF.jpg) / [#3](https://randomuser.me/api/portraits/men/43.jpg)      |
| Lovin Dublin avatar      | image        | [Lovin Dublin](https://t.co/Qz2mocJaYK?amp=1)      | [Lovin Dublin Twitter profile](https://twitter.com/LovinDublin/photo)      |
| Brew Barber customer black & white image     | photo        | [Brew Barberista Facebook page](https://www.facebook.com/brew.barberista)      | [Facebook](https://www.facebook.com/photo.php?fbid=246151787283327&set=pb.100056655232619.-2207520000..&type=3)      |
| 3fe logo      | logo        | [3fe](https://3fe.com/)      | [3fe website](https://3fe.com/uploads/3fe-social.jpg)      |
| Victoria Arduino logo      | logo        | [Victoria Arduino](https://www.victoriaarduino.com/)      | [Jimmy's Espresso Services](https://www.jimmys-espresso.co.uk/wp-content/uploads/2019/02/victoria-arduino-Narrow-Logo1-400.jpg)      |
| Tartine Organic Bakery logo      | logo        | [Tartine](https://www.tartine.ie/)      | [Veganic](https://veganic.ie/wp-content/uploads/2020/08/Tartine-Logo.jpg)      |
| Pieman logo      | logo        | [Pieman](https://www.thepieman.ie/)      | [Pieman website](https://images.squarespace-cdn.com/content/v1/58ab0e006b8f5bc50827b39e/1490268707882-D78IF5OH3SWO1502QB35/image-asset.png)      |
| Nic Gemma Cupcakes logo      | logo        | [Nic Gemma Cupcakes](https://www.instagram.com/nicgemmacupcakes/)      | [Nic Gemma Instagram page](https://scontent-dub4-1.cdninstagram.com/v/t51.2885-19/s320x320/145182603_3018544658415446_2135604228419315042_n.jpg?_nc_ht=scontent-dub4-1.cdninstagram.com&_nc_ohc=i2UDd_VT8ggAX9kCAwN&edm=ABfd0MgBAAAA&ccb=7-4&oh=a3bd6c9fd36b16adf253dc9f2c1d2e4a&oe=610BCD9E&_nc_sid=7bff83)      |
| The Raw Juice Company logo      | logo        | [The Raw Juice Company](https://raw.ie/)      | The Raw Juice Company [website](https://raw.ie/img/raw-food-and-beverage-solutions-logo-1605189335.jpg) & [Facebook page](https://www.facebook.com/The-Raw-Juice-Company-Ireland-113344153656389/photos/a.113344320323039/113489553641849)      |
| Korina Bakery logo      | logo        | [Korina Bakery](https://www.thegreendoor.ie/korina-bakery)      | [Korina Bakery Facebook page](https://www.facebook.com/korinabakery/photos/a.2251060755165684/2251062425165517)      |
| Tonja Maguire Art logo      | logo        | [Tonja Maguire Art](https://www.tonjamaguireart.com/)      | [Tonja Maguire Art Facebook page](https://www.facebook.com/Tonjamaguireart/photos/a.401354727329500/402379617227011)      |
| Conscious Cup Campaign logo      | logo        | [Conscious Cup Campaign](https://www.consciouscup.ie/)      | [Conscious Cup Campaign website](https://www.consciouscup.ie/images/cropped-cc_wp_headerb4.png)      |
| Pieta Darkness Into Light logo      | logo        | [Pieta](https://www.pieta.ie/)      | [Darkness Into Light 2021 website](https://www.darknessintolight.ie/home-page-2021)      |
| St. Francis Hospice logo      | logo        | [Saint Francis Hospice](https://www.sfh.ie/)      | [Laimoon](https://cdn.laimoon.com/content_1431673462-kp10.jpg)      |
| Raheny Business Association logo      | logo        | [Raheny Business Association](https://www.rahenybusiness.com/)      | [Raheny Business Association website](https://images.squarespace-cdn.com/content/v1/5a79bf21f9a61eae5ef4b493/1518545668706-0DFZ2XTG3NMNYHHRYJAW/Raheny-Business-Association-Logo-Revised.png?format=1500w)      |
| **`footer`**         |                 |      |                |
| 'Gmail New 2020 Vector'      | vector icon  | [IconApe](https://iconape.com/)      | [IconApe](https://iconape.com/gmail-new-2020-seeklogo-com-3-logo-icon-svg-png.html)      |
| 'Dog Friendly sign'      | image  | [SVGCraftLounge](https://www.etsy.com/ie/shop/SVGCraftLounge?ref=l2-about-shopname)      | [Etsy](https://www.etsy.com/ie/listing/1046348333/dog-friendly-sign-printable-and-cut-file?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=no+pets+allowed+png&ref=sr_gallery-2-26&pro=1)      |
</details>

### Acknowledgements:

![Brew Barberista responsive footer device mockups](docs/images/screenshots/mockups/brew-barberista-footer.png)

### Notice:

This site has been created for development purposes only.
