// import React from "react";
// import { motion } from "framer-motion";
// import { Calendar, User, Clock, ArrowRight } from "lucide-react";
// import { blogs } from "../../../data/mockData";

// interface BlogItem {
//   id: number | string;
//   title: string;
//   excerpt: string;
//   image: string;
//   category: string;
//   date: string;
//   readTime: string;
//   author: string;
// }

// const Blog: React.FC = () => {
//   return (
//     <section id="blog" className=" py-24 relative bg-grid-lines bg-linear-to-br from-gray-50 to-gray-100 overflow-hidden">
//       {" "}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold text-[#2F5E4B] mb-4">
//             Latest Insights
//           </h2>
//           <p className="text-base font-medium text-gray-600 max-w-2xl mx-auto font-space-mono">
//             Stay updated with the latest trends and insights.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {(blogs as BlogItem[]).map((blog, index) => (
//             <motion.article
//               key={blog.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               whileHover={{
//                 y: -8,
//                 boxShadow: "0px 25px 55px rgba(127, 174, 141, 0.45)",
//               }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//               className="group bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300"
//             >
//               <div className="relative h-56 overflow-hidden">
//                 <motion.img
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.4 }}
//                   src={blog.image}
//                   alt={blog.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute top-4 left-4">
//                   <span className="px-3 py-1 bg-[#2F5E4B] text-white text-xs font-semibold rounded-full">
//                     {blog.category}
//                   </span>
//                 </div>
//               </div>

//               <div className="p-6">
//                 <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
//                   <div className="flex items-center gap-1">
//                     <Calendar size={14} />
//                     <span>{blog.date}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Clock size={14} />
//                     <span>{blog.readTime}</span>
//                   </div>
//                 </div>

//                 <h3 className="text-xl font-bold text-[#2F5E4B] mb-3 line-clamp-2 group-hover:text-[#1e3f33] transition-colors duration-300">
//                   {blog.title}
//                 </h3>

//                 <p className="text-gray-600 mb-4 line-clamp-3 font-space-mono">
//                   {blog.excerpt}
//                 </p>

//                 <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                   <div className="flex items-center gap-2 text-sm">
//                     <User size={16} className="text-gray-400" />
//                     <span className="text-gray-600 font-space-mono uppercase">{blog.author}</span>
//                   </div>

//                   <button className="flex items-center gap-1 text-[#2F5E4B] font-semibold text-sm group-hover:gap-2 transition-all duration-300 font-space-mono uppercase tracking-wide">
//                     Read More <ArrowRight size={16} />
//                   </button>
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;
