import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2">Contact Me</h3>
            <p className="text-sm">Email: rhythmic34u@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Social Media</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-4 mt-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} Oakar. All rights reserved.</p>
      </div>
    </footer>
  );
}
