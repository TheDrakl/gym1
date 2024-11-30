Gym Management System

This project is a Gym Management System. It allows to interact with the system, manage memberships, and more. The backend is built using Django REST Framework (DRF), while the frontend is built with Vue.js. The project is containerized using Docker and Docker Compose for easy setup and deployment.


Tech Stack

	•	Backend: Python, Django, Django REST Framework (DRF), PostgreSQL
	•	Frontend: Vue.js, Vite, TailwindCSS
	•	Containerization: Docker, Docker Compose

Installation

Prerequisites

	•	Docker
	•	Docker Compose

Steps to Run Locally

    1. Clone the repository:
    
  	git clone [https://github.com/TheDrakl/gym1]
  	cd gym-new
   
    2. Build and start the containers using Docker Compose:

    	cd frontend && docker-compose up -d --build
     	cd .. && cd backend && docker-compose -f docker-compose.yml up -d --build

    3. Access the application:
    
    		Frontend: http://127.0.0.1:8080/
		Backend API: http://127.0.0.1:8080/api/

License

This project is licensed under the MIT License - see the LICENSE file for details.
