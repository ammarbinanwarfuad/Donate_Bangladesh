# Donate Bangladesh

A web application for donating to various causes in Bangladesh, including flood relief efforts and aid for injured individuals in the Quota Movement.

## Features

- **Donation System**: Make donations to multiple causes including:
  - Flood relief in Noakhali, Bangladesh
  - Flood relief in Feni, Bangladesh
  - Aid for injured in the Quota Movement

- **Balance Management**: Track your total balance and donated amounts
- **Transaction History**: View all your donation transactions with timestamps
- **Responsive Design**: Beautiful, modern UI built with Tailwind CSS and DaisyUI
- **Interactive UI**: Toggle between donation view and history view
- **Success Confirmation**: Popup confirmation after successful donations

## Technologies Used

- **HTML5**: Structure and markup
- **CSS3**: Custom styling
- **JavaScript**: Interactive functionality
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **DaisyUI**: Component library for Tailwind CSS (via CDN)

## Project Structure

```
Donate_Bangladesh/
│
├── assets/           # Images and media files
│   ├── coin.png
│   ├── feni.png
│   ├── logo.png
│   ├── noakhali.png
│   └── quota-protest.png
│
├── js/               # JavaScript files
│   └── index.js      # Main JavaScript logic
│
├── style/            # CSS files
│   └── style.css     # Custom styles
│
├── index.html        # Main page
├── blog.html         # Blog/FAQ page
├── tailwind.config.js # Tailwind configuration
└── README.md         # Project documentation
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Donate_Bangladesh.git
```

2. Navigate to the project directory:
```bash
cd Donate_Bangladesh
```

3. Open `index.html` in your web browser, or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

4. Open your browser and navigate to `http://localhost:8000`

## Usage

1. **Make a Donation**:
   - Enter the donation amount in the input field
   - Click "Donate Now" button
   - Confirm the donation in the popup

2. **View History**:
   - Click the "History" button to view all your past donations
   - Click "Donation" button to return to the donation view

3. **Browse FAQ**:
   - Click the "Blog" button in the navigation bar to view FAQs about DOM

## Features in Detail

### Donation Functionality
- Validates donation amount (must be greater than 0 and within available balance)
- Updates balance in real-time
- Tracks individual cause donations
- Clears input fields after successful donation

### Transaction History
- Displays all donations with amounts and causes
- Shows timestamp for each transaction
- Format: "X Taka is donated for [Cause Name]"
- Date format includes Bangladesh Standard Time (GMT+6)

### Balance Management
- Initial balance: 5500 BDT
- Balance decreases with each donation
- Real-time balance updates in the header

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Author

Created as part of a web development project for Bangladesh donation causes.

## Acknowledgments

- Tailwind CSS for the utility-first CSS framework
- DaisyUI for the beautiful component library
- All contributors and supporters of the project

