// Analytics utility functions for tracking website visits and orders
const BACKEND_URL = 'https://79vup8a13c.execute-api.eu-central-1.amazonaws.com';

/**
 * Track a website visit
 */
export const trackVisit = async () => {
  console.log('🔍 Tracking website visit...');
  try {
    const url = `${BACKEND_URL}/api/analytics/visit`;
    const payload = {
      timestamp: new Date().toISOString(),
      page: 'menu',
      tablyname: 'Zuwade',
      userAgent: navigator.userAgent,
    };
    
    console.log('📤 Sending visit data to:', url, payload);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    
    console.log('📥 Visit tracking response:', response.status, response.statusText);
    
    if (!response.ok) {
      console.warn('Failed to track visit:', response.status, response.statusText);
    } else {
      console.log('✅ Visit tracked successfully');
    }
  } catch (error) {
    console.warn('❌ Error tracking visit:', error);
  }
};

/**
 * Track an order submission
 * @param {Object} orderData - The order details
 */
export const trackOrder = async (orderData = {}) => {
  console.log('🛒 Tracking order submission...');
  try {
    const url = `${BACKEND_URL}/api/analytics/order`;
    const payload = {
      timestamp: new Date().toISOString(),
      tablyname: 'Zuwade',
      orderType: orderData.orderType || 'unknown', // pickup or delivery
      itemCount: orderData.itemCount || 0,
      totalAmount: orderData.totalAmount || 0,
      customerName: orderData.customerName || 'anonymous',
      customerPhone: orderData.customerPhone || 'not provided',
      items: orderData.items || [], // Individual items with details
      whatsappMessage: orderData.whatsappMessage || 'not available', // Full WhatsApp message
      userAgent: navigator.userAgent,
    };
    
    console.log('📤 Sending order data to:', url, payload);
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    
    console.log('📥 Order tracking response:', response.status, response.statusText);
    
    if (!response.ok) {
      console.warn('Failed to track order:', response.status, response.statusText);
    } else {
      console.log('✅ Order tracked successfully');
    }
  } catch (error) {
    console.warn('❌ Error tracking order:', error);
  }
};