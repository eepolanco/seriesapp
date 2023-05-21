## Description

This project is a TV Show Explorer application built with React, utilizing UI styles from PrimeNG and Bootstrap. It allows users to explore popular TV shows, search for specific shows, and view detailed information about each TV show.

## Requirements

- Paginated list of popular TV shows: The application should fetch and display a paginated list of the most popular TV shows using the "most-popular" resource from the API.

- Search functionality: The application should provide a search feature that allows users to search for TV shows. The search should utilize the "search" resource from the API, and the search results should be displayed in the list.

- Detailed TV show view: The application should have a separate view to display detailed information about a selected TV show. This view should make use of the "show-details" resource from the API to fetch and display the complete details of the TV show.

## Installation

1. Clone the repository: `git clone https://github.com/eepolanco/seriesapp`
2. Navigate to the project directory: `cd seriesapp`
3. Install the dependencies: `yarn`

## Usage

1. Start the development server: `yarn dev`
2. Open your browser and visit: `http://localhost:5000`

## API Integration

This project integrates with an API to fetch TV show data from (https://www.episodate.com/api). The following API endpoints are used:

- `most-popular`: Retrieves a paginated list of the most popular TV shows.
- `search`: Performs a search for TV shows based on a provided query.
- `show-details`: Fetches detailed information about a specific TV show.

The API base URL and available endpoints can be configured in the environment settings.

## Technologies Used

- React
- React Router DOM
- Axios
- PrimeNG
- Bootstrap

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [PrimeNG](https://www.primefaces.org/primeng/)
- [Bootstrap](https://getbootstrap.com/)
- [Axios](https://axios-http.com/)