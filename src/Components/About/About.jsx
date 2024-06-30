import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>
        
        {/* Company Overview */}
        <div className="flex flex-col md:flex-row md:space-x-10 mb-12">
          <div className="md:w-1/2">
            <img 
              // src="https://via.placeholder.com/600x400" 
              src = "https://images.unsplash.com/photo-1564429097439-e400382dc893?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Our team" 
              className="rounded-lg shadow-lg mb-6 md:mb-0"
              width={600}
              height={400}
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700 mb-4">
              Welcome to [Your E-Commerce Site], your number one source for all things [product, e.g., shoes, electronics]. We're dedicated to giving you the very best of [product], with a focus on dependability, customer service, and uniqueness.
            </p>
            <p className="text-gray-700 mb-4">
              Founded in [year] by [Founder's Name], [Your E-Commerce Site] has come a long way from its beginnings in a [starting location, e.g., home office, garage]. When [Founder's Name] first started out, [his/her/their] passion for [brand message - e.g., "eco-friendly cleaning products"] drove them to [action, e.g., do tons of research, quit the day job], so that [Your E-Commerce Site] can offer you [competitive differentiator - e.g., "the world's most advanced toothbrush"]. We now serve customers all over [place - town, country, the world], and are thrilled that we're able to turn our passion into our own website.
            </p>
            <p className="text-gray-700 mb-4">
              We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
            </p>
            <p className="text-gray-700">
              Sincerely,
              <br />
              [Founder's Name], [Title]
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-700 text-center mx-auto max-w-2xl mb-4">
            At [Your E-Commerce Site], our mission is to [state your mission]. We are committed to [brief explanation of how you fulfill your mission].
          </p>
        </div>

        {/* Our Values */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Values</h2>
          <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="md:w-1/3 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Customer Focus</h3>
              <p className="text-gray-700">We put our customers at the heart of everything we do, ensuring that we meet their needs and exceed their expectations.</p>
            </div>
            <div className="md:w-1/3 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Integrity</h3>
              <p className="text-gray-700">We uphold the highest standards of integrity in all of our actions, maintaining transparency and honesty in all interactions.</p>
            </div>
            <div className="md:w-1/3 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-700">We strive for continuous improvement and innovation, always looking for new ways to serve our customers better.</p>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Team</h2>
          <div className="flex flex-wrap justify-center space-x-4">
            <div className="w-1/3 md:w-1/4 mb-6 text-center">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Team member" 
                className="rounded-full shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="w-1/3 md:w-1/4 mb-6 text-center">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Team member" 
                className="rounded-full shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Chief Marketing Officer</p>
            </div>
            <div className="w-1/3 md:w-1/4 mb-6 text-center">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Team member" 
                className="rounded-full shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Mike Johnson</h3>
              <p className="text-gray-600">Head of Product</p>
            </div>
            <div className="w-1/3 md:w-1/4 mb-6 text-center">
              <img 
                src="https://images.unsplash.com/photo-1513152697235-fe74c283646a?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Team member" 
                className="rounded-full h-36 object-cover w-36 shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Emily Davis</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </div>

        {/* Our Journey */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Journey</h2>
          <p className="text-gray-700 text-center mx-auto max-w-2xl mb-4">
            Our journey began in [year] when [Founder's Name] had the vision to [brief description of the inception of the company]. Since then, we have grown from [initial stage] to [current state], thanks to our unwavering commitment to [core value or mission].
          </p>
          <p className="text-gray-700 text-center mx-auto max-w-2xl">
            Over the years, we have [key milestones or achievements], which have shaped our growth and success. We are excited to continue this journey and see where it takes us next.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About