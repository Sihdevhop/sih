// components/Blog.js

const blogs = [
    {
      id: 1,
      date: '177 April',
      category: 'Inspiration',
      title: 'How to Own Your Audience by Creating an Email List.',
      image: '/image-1.png',
    },
    {
      id: 2,
      date: '21 April',
      category: 'Web Design',
      title: 'The window know to say beside you',
      image: '/image-2.jpg',
    },
    {
      id: 3,
      date: '27 April',
      category: 'Inspiration',
      title: 'How to Own Your Audience by Creating an Email List.',
      image: '/image-3.png',
    },
    {
      id: 4,
      date: '000 April',
      category: 'Inspiration',
      title: 'Everything You Need to Know About Web Accessibility.',
      image: '/image-5.webp',
    },
  ];
  
  const Blog = () => {
    return (
      <section className="max-w-7xl mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <p className="text-gray-500 text-sm">{`${blog.date} • ${blog.category}`}</p>
                <h3 className="text-lg font-bold mt-2">{blog.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Blog;
  