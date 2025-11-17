#!/usr/bin/env node

// Simple build script for static site deployment
const fs = require('fs');
const path = require('path');

console.log('🔧 Building static website...');

// Check if index.html exists
if (fs.existsSync('index.html')) {
    console.log('✅ index.html found');
} else {
    console.error('❌ index.html not found');
    process.exit(1);
}

// Check if assets directory exists
if (fs.existsSync('assets')) {
    console.log('✅ assets directory found');
} else {
    console.error('❌ assets directory not found');
    process.exit(1);
}

// Create .nojekyll file if it doesn't exist
if (!fs.existsSync('.nojekyll')) {
    fs.writeFileSync('.nojekyll', '# Disable Jekyll processing for GitHub Pages');
    console.log('✅ Created .nojekyll file');
}

console.log('✅ Build completed successfully!');