import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    // console.log(blog);
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img className=' rounded-2xl' src= {cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between my-4'>
                <div className='flex gap-6 items-center '>
                    <img className=' w-16 h-16 rounded-full' src= {author_img} alt="" />
                    <div>
                        <h3 className=' text-2xl'> {author} </h3>
                        <p> {posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read </span>
                </div>
            </div>
            <h2 className='text-4xl'> {title} </h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} ><a href=''>{hash} </a></span> )
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;