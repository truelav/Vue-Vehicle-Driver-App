
<template>
  <main>
    <div class="page-header">
      <h2 class="">Please Readme</h2>
    </div>
    <div class="list-container">
      <div class="home-blog">
        <h3 class="home-blog-header">Overview</h3>
        <p class="blog-paragraph">
          Following the email guidelines and in order to demonstrate my ability to get up to speed with the frontend side of tech stack, this is my reasoning behind the solutions I implemented.
        </p>
        <p class="blog-paragraph"> 
          I have not used any extra packages, frameworks, themes or UI Kits, using any of these would saved me a ton of time, but I wanted to showcase my true understanding of HTML, CSS and Javascript.
        </p> 
        <p class="blog-paragraph"> 
          Choosing JSON-server for storing and persisting data but more important to showcase my ability to work with async code, CRUD operations and requests, updating relational data using 
          just the frontend is a bit more challenging than handling everything on a SQL database with some simple server.
        </p>
      </div>

      <div class="home-blog">
        <h3 class="home-blog-header">Pages and Functionality</h3>
        <h4 class="home-blog-subheader">Vehicles Page</h4>
        <p class="blog-paragraph">
          <strong> 1.</strong> As discussed in the email, the user is able to keep track of the person currently driving their tracked vehicles. 
          The user is able to create/update/delete drivers as well as vehicles.
          Everything is accessible through a sidebar where you can view Vehicles Page as a List of Vehicles with Vehicle details
          as the Make, Model, Assigned Driver, as well as the status and 2 action buttons Edit and Delete Vehicle.<br/>
            a. The Edit button opens the '../vehicle/:id' - probably a simpler implementation would be a modal edit form similar 
              to add vehicle, but I wanted to show ability to work with dynamic routes<br/>
            b. The Delete Vehicle will delete vehicle and if there was a driver assigned it will make that driver available 
              automatically also in a production app would need a confirm delete dialog, before deleting to prevent accidental clicks.<br/>
            c. Clicking on driver will take you Driver Details Page (#Edit) <br/>
          I have also included a Filter Bar with the option to View All, view only available and view only occupied vehicles, a search bar if the list of vehicles is big and add Vehicle
          action button that will open a modal form, again to showcase my conditional rendering skills.
        </p>
        <h4 class="home-blog-subheader">Vehicle Details Page</h4>
        <p class="blog-paragraph">
          <strong> 2.</strong> Clicking on #Edit it opens Vehicle Details Page as a form with the current info, that is editable along with a select component where you get to choose from available
          drivers, I know this is not the ideal implementation, but I have found some difficulties with automatically updating driver info when assigning a driver that is busy, creates a long chain
          of requests that I need to update that car, current car, current driver and new driver, and code becomes pretty messy, so you have to unassign the driver first, then assign him to that vehicle.
          Again a Node server with any SQL DB and some state management like Pinia will make this very easy and clean.
        </p>
        <h4 class="home-blog-subheader">Drivers Page and Details Page</h4>
        <p class="blog-paragraph">
          <strong> 3.</strong> Drivers Page is extremely similar to vehicles page and it follow the exact pattern with the exception of data. Clicking on Edit button will take the user to Driver Details Page, now
          the difference here is that you cannot assign the vehicle from here, the reason is the same as the one for ability to assign only available drivers.
          T
        </p>
      </div>

      <div class="home-blog">
        <h3 class="home-blog-header">Extras</h3>
        <p class="blog-paragraph">
          There are a couple extras that I would like to underline:
          <br/>
            1. Skeleton, simple loading state, I have used setTimeout to mock a delay that will occur when making requests to real server.           <br/>
            2. Reusable registered UI components, MyButton, MyInput, MyLoading, etc.          <br/>
            3. Lazy Loading for pages, to save bandwidth we request and load the resources only needed at the time.          <br/>
            4. Simple hooks, for making the requests, filtering and searching items.    <br/>
            5. Mobile Friendly responsive design    
        </p>
      </div>
    </div>
  </main>
</template>

<script>
</script>

<style>
  .home-blog {
    padding: 15px;
    margin-top: 25px;
    margin-bottom: 25px;
    border-bottom: 1px solid #00000030;
  }

  .home-blog-header {
    margin-bottom: 15px;
    border-bottom: 1px solid #00000030;
  }

  .blog-paragraph {
    padding: 5px 15px;
  }

  .home-blog-subheader {
    padding: 10px;
  }
</style>
