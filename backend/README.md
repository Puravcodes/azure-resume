# Azure Resume Counter App

This is an Azure Function application that tracks the number of times a resume has been accessed. It leverages Cosmos DB for data storage, maintaining a simple counter that increments with each request. The app is written in C# and deployed on Azure Functions.

## Features

- **Incremental Counter**: Each request increments the resume access count in a Cosmos DB collection.
- **Azure Cosmos DB Integration**: Data persistence with Cosmos DB to store the count.
- **API Endpoint**: Provides an HTTP-triggered endpoint for tracking requests.

## Technologies Used

- **Azure Functions**: Serverless function to handle HTTP requests.
- **Azure Cosmos DB**: NoSQL database for managing the access counter.
- **C#**: Function code written in C#.
- **GitHub**: Version control and project management.

---

## Getting Started

These instructions will help you set up the project on your local machine and deploy it to Azure.

### Prerequisites

- **Azure Subscription**: Required for setting up Cosmos DB and deploying Azure Functions.
- **Azure CLI**: For managing and deploying Azure resources. [Install Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli).
- **Azure Functions Core Tools**: For running Azure Functions locally. [Install Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local).
- **Visual Studio / VS Code**: Preferred IDE for C# development.
- **.NET SDK**: Required for compiling and running C# code. [Install .NET SDK](https://dotnet.microsoft.com/download).

### Setting up the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/azure-resume-counter.git
   cd azure-resume-counter
2. **Install Dependencies**: 
    Ensure that Azure Functions Core Tools are installed, and you have logged in with az login through the Azure CLI.

3. **Create Cosmos DB Account**:

   - Go to the Azure Portal and create a new Cosmos DB account.
   - Create a database named AzureResume and a container named Counter.
    - Insert a document with the following structure to initialize the counter:
    ```json
    {
    "id": "1",
    "count": 0
    }
4. **Configure Connection String**:

    - In the Azure Portal, navigate to your Cosmos DB account, and copy the Primary Connection String.
    - Create a local `local.settings.json` file in the project’s root directory, and add the connection string:
    ```json
    {
    "IsEncrypted": false,
    "Values": {
    "AzureWebJobsStorage": "<Your_Azure_Storage_Connection_String>",
    "FUNCTIONS_WORKER_RUNTIME": "dotnet",
    "AzureResumeConnectionString": "<Your_Cosmos_DB_Connection_String>"
        }
    }
    ```
### Running the Project Locally

1. **Start the Function**: Run the following command to start the function locally:
```bash
func host start
```
2. **Test the Function**: Use any API testing tool like Postman or simply curl to send a GET request to:
```bash
http://localhost:7071/api/GetResumeCounter
```

-----
## Project Structure
- `GetResumeCounter.cs`: Contains the Azure Function logic for managing the resume counter.
- `Counter.cs`: Defines the Counter model used for interacting with Cosmos DB.
- `local.settings.json`: Local environment settings for development (not included in the repository for security reasons).

