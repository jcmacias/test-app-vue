# TestApplication
Simple Test Application Project

**Project Scope:**

Create a single page application to view thumbnails of products, allowing user to click on a single product to view full product details. We are looking for a simple and clean design with a focus on the product images.  Must also be responsive and work well on all devices (desktop, tablet, phone)

The data will be provided via JSON that is in the project and has the following definition:

**The root object:**

This is the manufacturer information used for branding, be sure to show company logo, and company name.  

**Company logo is generated using the following url format:** 
http://images.repzio.com/productimages/{{ManufacturerID}}/logo{{ManufacturerID}}_lg.jpg  
(see link for resizing this to fit your design: http://imageresizing.net/docs/basics)

**Items:**

This is the list of products for the user to be able to navigate through.  Please show ItemID, ItemName, Description, Dimensions, and BasePrice.  We use imageresizer (see above) so you can make thumbnails by appending query string parameters to the url of the photoname property

**SalesRep:** 

This is the contact information for the presentation, be sure to display this contact information.
