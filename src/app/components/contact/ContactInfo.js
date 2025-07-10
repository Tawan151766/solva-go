'use client';

const contactItems = [
  { 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
        <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z" />
      </svg>
    ), 
    label: 'support@solvago.com', 
    type: 'email' 
  },
  { 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
        <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z" />
      </svg>
    ), 
    label: '+1 (555) 123-4567', 
    type: 'phone' 
  },
  { 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
        <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" />
      </svg>
    ), 
    label: '123 Business St, City, State 12345', 
    type: 'address' 
  },
  { 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
      </svg>
    ), 
    label: 'Mon - Fri: 9:00 AM - 6:00 PM', 
    type: 'hours' 
  }
]

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#eae1cd]">
      <h3 className="text-[#1d180c] text-lg font-semibold mb-6">Contact Information</h3>
      
      <div className="space-y-4">
        {contactItems.map((item, idx) => (
          <div key={idx} className="flex items-start gap-4 p-3 rounded-xl hover:bg-[#f4f0e6] transition-colors duration-200">
            <div className="bg-[#f4af00] text-[#1d180c] rounded-lg flex items-center justify-center w-10 h-10 flex-shrink-0">
              {item.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[#1d180c] text-base font-medium break-words">
                {item.label}
              </p>
              <p className="text-[#a18745] text-sm mt-1 capitalize">
                {item.type}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div className="mt-8 pt-6 border-t border-[#eae1cd]">
        <h4 className="text-[#1d180c] text-base font-semibold mb-4">Follow Us</h4>
        <div className="flex gap-3">
          {[
            {
              name: 'Facebook',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M256,128C256,57.31,198.69,0,128,0S0,57.31,0,128c0,63.72,46.77,116.49,108,126.16V165H75.5V128H108V99.8c0-32.08,19.11-49.8,48.35-49.8C170.17,50,180,52,180,52v29.44H157.17C134.67,81.44,128,94.39,128,107.73V128h36l-5.75,37H128v89.16C209.23,244.49,256,191.72,256,128Z" />
                </svg>
              )
            },
            {
              name: 'Twitter',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Z" />
                </svg>
              )
            },
            {
              name: 'Instagram',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
                </svg>
              )
            },
            {
              name: 'LinkedIn',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
                </svg>
              )
            }
          ].map((social, idx) => (
            <button
              key={idx}
              className="w-10 h-10 bg-[#f4f0e6] hover:bg-[#f4af00] rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label={`Follow us on ${social.name}`}
            >
              {social.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
