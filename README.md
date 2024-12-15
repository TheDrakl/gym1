Gym Management System

This project is a Gym Management System. It allows to interact with the system, manage memberships, and more. The backend is built using Django REST Framework (DRF), while the frontend is built with Vue.js. The project is containerized using Docker and Docker Compose for easy setup and deployment.


Tech Stack

	Backend: Python, Django, Django REST Framework (DRF), PostgreSQL
	Frontend: Vue.js, Vite, TailwindCSS
	Containerization: Docker, Docker Compose

 Major Functions
- Shop Supplements: Users can view a list of available supplements, filter by categories, and add them to the cart.
- Cart Management: Users can manage the items in their cart.
- Membership Inquiry: Users can send an email to inquire about gym membership.
- Contact Page: A contact form that allows users to reach the gym for general inquiries.


Installation

Prerequisites

	Docker
	Docker Compose

Steps to Run Locally

    1. Clone the repository:
    
    git clone https://github.com/TheDrakl/gym1
    cd gym1
   
    2. Build and start the containers using Docker Compose:

    docker-compose -f docker-compose.dev.yml up -d --build

    3. Access the application:
    
    Frontend: http://127.0.0.1:8080/
    Backend API: http://127.0.0.1:8080/api/

Creating superuser and accessing admin menu

	1. Create super user

  	python manage.py createsuperuser

   	2. Aceess admin panel

 	http://127.0.0.1:8080/admin/
     	

License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 
