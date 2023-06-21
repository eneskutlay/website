##  Overview
-   `/` - Home page.
-   `pages/about` - About page.
-   `pages/writing/[slug]` - Static pre-rendered writing pages using [Sanity](https://www.sanity.io/).

### Run Locally
```bash
$ git clone https://github.com/eneskutlay/website
$ cd website
$ npm install
$ npm run dev
```

### Sanity for Backend
If you haven't heard of [Sanity.io](https://www.sanity.io/)  before, you can visit its website.
```bash
$ cd sanity-backend/
$ npm install
$ npx @sanity/cli init 
$ npx @sanity/cli start
```
If you have completed all these steps without any problems, Sanity Studio should be running on the ***3333*** port and NextJs should be running on the ***3000*** port.

### Editing Navbar Items - Head and Sanity Client
To edit the Navbar section and Head contents, you need to edit the `lib/data.js` file.
To connect to Sanity Studio, you need to edit the `lib/client.js` file. For additional instructions, visit the comment lines and the official [Sanity.io](https://www.sanity.io/) website.

### Sanity Schemas
You can review the `/sanity-backend/schemas` folder to edit Sanity schemas and the [Sanity Schemas Documentation](https://www.sanity.io/docs/schema-types) for more information.

### getStaticProps and Data Fetching
If you haven't heard enough about data fetching and getStaticProps before, you can check the official documentation from [NextJs](https://nextjs.org/docs/basic-features/data-fetching/).

### Screenshots
![Home Page](https://res.cloudinary.com/eneskutlay/image/upload/v1687358426/websiteVersionThree_yxrslq.png)