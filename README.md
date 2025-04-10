# QaceTech Assessment Overview

This assessment includes a **Dashboard** that displays job cards in a grid and allows users to interact with them. When a job card is clicked, detailed information about the job is displayed, and users can filter and search through the jobs on the dashboard.

## 🚀 Features

- **Interactive Job Cards**: Job cards are displayed on the homepage. Each card represents a job and can be clicked to view more details.
- **Job Selection**: Clicking on a job card will display detailed information about the selected job.
- **Tab Navigation**: The dashboard has tabs for filtering records, including **All Records** and **Request** tabs.
- **Search & Filter**: Users can search the jobs and filter them based on a query or parameter.
- **Action Buttons**: Options for refreshing the table or downloading it are available.
- **Statistical Overview**: The dashboard provides a summary of job statuses like **All**, **Active**, and **Liquidated**.

---

## 📄 Flow: How the Dashboard Works

1. **Render Job Cards on the Homepage**
   The dashboard initially renders multiple **job cards** in a grid layout on the homepage (`Dashboard.tsx`). Each job card provides basic information about a task.

2. **Hover Behavior (Optional)**
   The job cards might have hover effects, where additional information about the job can be seen, such as job status or other quick details.

3. **Click Behavior**
   - When you **click a job card**, it updates the view to show more detailed information about the selected job.
   - The **selected job** view contains navigation breadcrumbs, job-related actions, and task-specific details.
4. **Tab Navigation**

   - You can navigate between different sections (e.g., **All Records** and **Request**) by clicking on the tabs at the top of the job details view.
   - Each tab displays filtered job records based on the current tab.

5. **Job Overview Stats**
   - The dashboard shows a summary of job statuses: **Active**, and **Liquidated** with their respective counts.
6. **Search and Filtering**
   - You can search and filter jobs by using the **search input** and **dropdown selectors**.
   - The search input allows you to filter job records based on specific parameters (e.g., query or parameter).
7. **Action Buttons**

   - **Refresh Table**: Refreshes the job data and updates the table view.
   - **Download Table**: Allows the user to download the table data in a desired format (e.g., CSV).

8. **New Job Request**
   - The "New Request" button at the top allows the user to add a new job request.

---

## 🧑‍💻 How to Use the Dashboard

1. **Initial View**:  
   When you first visit the dashboard, you will see a grid of **job cards**. You can hover over the cards for additional info (optional) and click on any card to navigate to the detailed view.

2. **Detailed View**:  
   After clicking a job card, the detailed view will be displayed with the selected job's title and other related actions like navigating to a request or viewing additional details.

3. **Switch Between Tabs**:  
   Use the **All Records** and **Request** buttons to switch between different job views.

4. **Navigation**:
   - The breadcrumb navigation (like "Dashboard") at the top of the detail view allows you to navigate back to the main dashboard or other sections.

---

## 💡 Tips

- **Hovering on a Job Card**: Hovering over a card will give you additional information or highlight the job for better visibility.
- **Job Status Overview**: The statistical overview at the top of the detailed view allows you to quickly see the status of jobs (e.g., how many are active vs. liquidated).
- **Navigation Shortcuts**: Use the breadcrumb navigation (like "Dashboard") to go back to the jobs list in the dashboard.

---

## 🛠️ Tech Stack

- **React** for the frontend
- **Vite** for fast development and build tool
- **TypeScript** for type safety
- **React Router** for navigation
- **Tailwind CSS** for styling

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Kelvin-Kelechi/QaceTech-frontend.git
cd QaceTech-frontend
```

# QaceTech-frontend
