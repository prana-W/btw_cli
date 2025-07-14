# btw_cli

`btw_cli` (btw: _by-the-W_) is a simple and powerful **Command Line Interface (CLI)** designed to help you perform various useful tasks directly from your terminal.

It streamlines productivity with quick commands for time tracking, task scheduling, and result viewing — all accessible without leaving your terminal.

---

## ⚙️ Installation and Setup Guide

Follow these steps to set up the btw_cli on your machine.

---

### Step 1: Download or Clone the Project

Choose **one** of the following:

#### 🔹 Option 1: Download Zip

1. [Download the ZIP file](https://github.com/prana-W/btw_cli/releases/download/v1.0.0/btw_cli_1.0.0.zip)
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

> ⚠️ NOTE: In case of warning saying `Windows protected your PC`, click on More info, swipe right and then click `Run Anyway`
> P.S: Setup might take several minutes. Be Patient!

This will check your Node.js version and setup btw_cli.

---

#### 🐧 For Linux

1. Open extracted/cloned `btw_cli` folder in your terminal
2. Run the following command:

```bash
npm run setup
```

Node version will be checked automatically and btw_cli will be setup.

> NOTE: This has only been tested on **Ubuntu**.
> P.S: Setup might take several minutes. Be Patient!

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

| Command               | Alias(es)         | Description                                             |
| --------------------- | ----------------- | ------------------------------------------------------- |
| `time`                | `now`, `t`        | Displays the current time                               |
| `start-session`       | `start`, `ss`     | Starts and tracks a focused work session                |
| `end-session`         | `end`, `es`       | Ends the current session and shows the total duration   |
| `session-history`     | `session-h`, `sh` | Shows the history of your last 5 work sessions          |
| `result <roll>`       | –                 | Displays your academic result based on your roll number |
| `add-event`           | `calender`, `cal` | Adds an event to your Google Calendar                   |
| `gh-stats <username>` | `github`, `gh`    | Display your GitHub Statistics                          |

---

> 🛠️ More commands coming soon to supercharge your terminal productivity!

## Technology Used

- `Commander`: For building the CLI interface
- `Enquirer`: For interactive prompts
- `Chalk`: For styling the terminal output
- `Ora`: For showing loading spinners
- `Puppeteer`: For web scraping (e.g., fetching GitHub Stats)
- `Conf`: For storing various data like session history
- `DayJS`: For handling date and time operations
- `Open`: For opening URLs in the default browser
- `Figlet`: For adding ASCI art to the terminal output
- `Gradient String`: For gradient-colored terminal output

---
