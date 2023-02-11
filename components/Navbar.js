export default function Navbar({session}) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">        
        <a class="navbar-brand" href="/">Navbar</a>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          {!session ? (
            <ul class="navbar-nav my-2 my-lg-0">
            <li class="nav-item"><a class="nav-link" href="/login">Login</a></li>
            <li class="nav-item"><a class="nav-link" href="/signup">Signup</a></li>
            </ul>
          ) : (
            <ul class="navbar-nav my-2 my-lg-0">
            <li class="nav-item"><a class="nav-link" href="/account">Account</a></li>
            <li class="nav-item"><a class="nav-link" href="/logout">Logout</a></li>
            </ul>
          )}
          
        </div>
      </div>
    </nav>
  )
}