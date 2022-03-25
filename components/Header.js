import Link from 'next/link';

function onSubmit(e) {
  e.preventDefault();
  console.log("I clicked it!")
}

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
      <form onSubmit={onSubmit} netlify>
        <label for="fname">First name:</label><br />
        <input type="text" id="fname" name="fname" value="John" /><br />
          
        <label for="lname">Last name:</label><br />
        <input type="text" id="lname" name="lname" value="Doe" /><br /><br />
          
        <input type="submit" value="Submit" />
      </form> 
    </header>
  );
}
