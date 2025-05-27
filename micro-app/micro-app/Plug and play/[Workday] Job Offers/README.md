# Workday Job Offers Micro-app

## Description
This micro-app displays and filters job offers from Workday, allowing users to browse available positions based on job titles and locations.

## Features
- Real-time job posting retrieval from Workday
- Multi-select filtering capabilities
- Filter by job title and location
- Direct links to job details
- Dynamic filter options based on available positions
- Responsive card layout for job listings
- Interactive filtering interface

## Connector Documentation
- [Connector Documentation](https://docs.lumapps.com/docs/admin-l4430581765424978extensions)
- [Workday Connector Documentation](http://docs.lumapps.com/docs/docs/admin-administration-landing/admin-l6088963918247602/admin-l9650191038731043extensions/admin-l43084339674928007extensions/admin-l4754802368470471extensions)
- [Workday API documentation](https://community.workday.com/sites/default/files/file-hosting/restapi/)

## Inputs / Variables to Set
- department: You can find the value in your workday url when you are on the home page, you'll have something like <domain>/<department>/d/home.htmld

## Necessary API Scopes
- Recruiting - This scope provides access to Workday's recruitment data, including job postings, positions, and location information. It allows the micro-app to retrieve available job offers and their details.

## Comments on Functioning
- The microapp starts by fetching all available job postings from Workday
- It automatically extracts unique job titles and locations for filtering
- Users can select multiple job titles and locations as filters
- The display updates dynamically based on selected filters
- Each job posting shows:
  - Job title
  - Location
  - Link to detailed job description
- Empty filter selections show all available positions

## Link to Microapp Import Documentation
[Microapp Import Documentation](#)