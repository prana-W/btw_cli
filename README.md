# btw_cli

`btw_cli` (btw: *by-the-W*) is a simple and powerful **Command Line Interface (CLI)** designed to help you perform various useful tasks directly from your terminal.

It streamlines productivity with quick commands for time tracking, task scheduling, and result viewing — all accessible without leaving your terminal.

---

## ⚙️ Installation and Setup Guide

Follow these steps to set up the btw_cli on your machine.

---

### Step 1: Download or Clone the Project

Choose **one** of the following:

#### 🔹 Option 1: Download Zip

1. [Download the ZIP file](insert-link-here)
2. Extract it to a location of your choice
3. Open the extracted folder

#### 🔹 Option 2: Clone via Git

```bash
git clone https://github.com/prana-W/btw_cli.git
```

---

### Step 2: Platform-Specific Setup

#### 🪟 For Windows

1. Go to the extracted/cloned `btw_cli` folder
2. Simply **double-click** the file:  
   `setup_windows.bat`

This will check your Node.js version and setup btw_cli.

---

#### 🐧 For Linux

1. Open extracted/cloned `btw_cli` folder in your terminal
2. Run the following command:

```bash
npm run setup
```

Node version will be checked automatically and btw_cli will be setup.

NOTE: This has only been tested on **Ubuntu**.

---

> 💡 Make sure you have Node.js (v20 or later) installed before running the setup.


---

## How to use btw_cli

To use any command, make sure you’ve followed the **[Setup Guide](#project-setup-guide)** once.  
After that, you can run any command from **any terminal** by typing:

```bash
btw <command>
```

### 🧰 Available Commands

| Command              | Alias(es)         | Description                                                   |
|----------------------|-------------------|---------------------------------------------------------------|
| `time`               | `now`, `t`        | Displays the current time                                     |
| `start-session`      | `start`, `ss`     | Starts and tracks a focused work session                      |
| `end-session`        | `end`, `es`       | Ends the current session and shows the total duration         |
| `session-history`    | `session-h`, `sh` | Shows the history of your last 5 work sessions                |
| `result <roll>`      | –                 | Displays your academic result based on your roll number       |
| `add-task`           | `calender`, `cal` | Adds a task to your Google Calendar                           |

---

> 🛠️ More commands coming soon to supercharge your terminal productivity!