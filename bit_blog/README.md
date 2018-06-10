App

<Switch>
  <Route path='/home' component={Home} />
  <Route path='/about' component={About} />
  <Route path='/posts/:id' component={SinglePost} />
  <Route path='/authors' component={Authors} />
  <Route path='/authors/:id' component={SingleAuthor} />
  <Route path='/posts/new' component={CreatePost} />
  <Redirect from='/' to='/home' />
</Switch>



home page /

<Header />
<PostList>
  <PostItem />
</PostList>
<Footer />

single post page /posts/:id

<Header />
<PostDetails />
<RelatedPosts />
<Footer />


authors page /authors

<Header />
<AuthorList>
  <AuthorItem />
</AuthorList>
<Footer />


single author page /authors/:id

<Header />
<Author />
<Footer />

about page /about

<Header />
<About />
<Footer />

crate post page /posts/new

<Header />
<NewPost />
<Footer />
