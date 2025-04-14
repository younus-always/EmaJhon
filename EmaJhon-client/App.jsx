
export const App = () => {
      return (
            <>
                  <header className="bg-primary text-white w-full">

                        <nav className='container mx-auto border px-3 py-3'>
                              <div className="flex items-center justify-between">
                                    {/* Logo */}
                                    <div>
                                          logo
                                    </div>
                                    <div className='flex items-center gap-3 border'>
                                          {/* Menu list  */}
                                          <ul className="flex items-center gap-3">
                                                <li>
                                                      <a href={'/'}>Home</a>
                                                </li>
                                                <li>
                                                      <a href={'/about'}>About</a>
                                                </li>
                                                <li>
                                                      <a href={'/collection'}>Collection</a>
                                                </li>
                                                <li>
                                                      <a href={'/order'}>Order</a>
                                                </li>
                                                <li>
                                                      <a href={'/review'}>Review</a>
                                                </li>
                                          </ul>
                                          <div>
                                                <button className='font-semibold'>
                                                      Login
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        </nav>

                  </header>
                  <main>
                        <section>
                              <div>
                                    Hero Area
                              </div>
                        </section>
                  </main>
            </>
      )
}
