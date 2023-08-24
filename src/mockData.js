const mockData = {
    "events": [
      {
        "id": 1,
        "title": "Team Meeting",
        "description": "Discuss project status and next steps.",
        "location": "Conference Room A",
        "start": "2023-08-25T09:00:00",
        "end": "2023-08-25T10:30:00",
        "isGoing": true,
        "attendees": [
          {
            "id": 101,
            "name": "John Doe",
            "email": "johndoe@example.com",
            "isGoing": true
          },
          {
            "id": 102,
            "name": "Jane Smith",
            "email": "janesmith@example.com",
            "isGoing": false
          },
          {
            "id": 103,
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "isGoing": true
          }
        ]
      },
      {
        "id": 2,
        "title": "Lunch with Clients",
        "description": "Discuss the new project proposal.",
        "location": "Restaurant XYZ",
        "start": "2023-08-26T12:30:00",
        "end": "2023-08-26T14:00:00",
        "isGoing": true,
        "attendees": [
          {
            "id": 201,
            "name": "David Brown",
            "email": "davidbrown@example.com",
            "isGoing": true
          },
          {
            "id": 202,
            "name": "Emily White",
            "email": "emily@example.com",
            "isGoing": false
          },
          {
            "id": 203,
            "name": "Charlie Lee",
            "email": "charlie@example.com",
            "isGoing": true
          }
        ]
      },
      {
        "id": 3,
        "title": "Training Workshop",
        "description": "Learn about the new software tools.",
        "location": "Training Center",
        "start": "2023-08-27T10:00:00",
        "end": "2023-08-27T16:00:00",
        "isGoing": true,
        "attendees": [
          {
            "id": 301,
            "name": "Grace Wilson",
            "email": "grace@example.com",
            "isGoing": true
          },
          {
            "id": 302,
            "name": "Samuel Green",
            "email": "samuel@example.com",
            "isGoing": true
          },
          {
            "id": 303,
            "name": "Ella Davis",
            "email": "ella@example.com",
            "isGoing": false
          }
        ]
      }
    ]
  }
  
export default mockData;