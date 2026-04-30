# Overview

FleetSync aims to reduce the friction within an organization that maintains their own fleet. FleetSync's goals are to limit access to features based on roles, thus a mechanic or driver cannot access fleet manager features, such as setting service intervals for example.

FleetSync is built as a cross-platform web application and uses the Angular front-end framework with a Java Spring-Boot back-end. The database will be a PostgreSQL relational database for storing application data such as fleet equipment and their service history.

FleetSync aims to make these areas of Fleet Management cohesive:

1. Inventory Management - Manual Inventory management to allow for updating inventory items/amounts, and will notify fleet management when an inventory item needs to be bought.
2. Equipment Service's - A service can be setup to automatically deduct inventory items to complete the service, such as filters and quarts of oil.
3. Logging repair details, that includes time, parts used, current mileage, and supporting media such as images and/or videos.
4. Service/Repair Requests - This allows drivers to write up issues with their assigned equipment and the fleet managers will get a real time notification upon it the driver posting it.

Many more features will come, but for now this is the minimal viable product.
