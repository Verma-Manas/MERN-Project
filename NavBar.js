const NavBar = () => {
    return (
    <nav className="navbar">
        <div className="layout">
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCKJDN8NSwNe32kC1qqojqO2XYpMqOKqm25g&s" 
            alt="Logo" 
            className="logo" 
        />
        <div className="main">
            <select id="explore" name="explore">
            <option value="ExploreCourses">Explore Courses</option>
            <option value="Course1">Course 1</option>
            <option value="Course2">Course 2</option>
            </select>
            <p >Success Stories</p>
            <p >Blogs</p>
            <p >Events</p>
        </div>
        <div className="button">
            <button className="but">Log In</button>
            <button className="butn">Start Free Trial</button>
        </div>
        </div>
    </nav>
    );
};

export default NavBar;
