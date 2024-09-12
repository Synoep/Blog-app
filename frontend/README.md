 Simple Blog Post CRUD
Objective:
Create a simple blog platform where users can create, view, and delete blog posts. The backend should be built with a basic REST API and a database, and the frontend UI should use ShadCN

1. Frontend:
Framework: Next.js
UI Library: ShadCN
Pages:
Home Page: Display a list of all blog posts with options to view or delete each post.
Create Post Page: Form to create a new blog post.
View Post Page: Display the full content of a selected blog post.
Components:
Blog Card: Displays the title and excerpt of each blog post.
Header: Simple navigation bar.
Form: For creating a new blog post (title, content).
Button: For submitting forms and deleting posts, styled using ShadCN.
Design:
Use ShadCN components for cards, buttons, and forms.
Implement a responsive design.

2. Backend:
Framework: Express.js or Flask
Database: SQLite (for simplicity and quick setup)
API Endpoints:
GET /posts: Retrieve all blog posts.
GET /posts/:id: Retrieve a single blog post by ID.
POST /posts: Create a new blog post.
DELETE /posts/:id: Delete a blog post by ID.
Database Models:
Post: Table with fields id, title, and content.
Validation:
Ensure title and content are required fields when creating a post.
