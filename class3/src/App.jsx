import Card from "./Components/Card.jsx";

const App = () => {

  const users = [
  {
    id: 0,
    fullName: "Peter Parker",
    title: "Friendly Neighborhood Spider-Man",
    profile: "https://images.unsplash.com/photo-1608889175123-8ee362201f81",
    coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    likesCount: '1.2K',
    postCount: 45,
    viewsCount: '15K',
    followed: true
  },
  {
    id: 1,
    fullName: "Bruce Wayne",
    title: "The Dark Knight",
    profile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    coverImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    likesCount: '2.5K',
    postCount: 80,
    viewsCount: '30K',
    followed: false
  }
  ]

  return (
    <div className="min-h-screen bg-whitesmoke flex flex-wrap gap-10 p-5 justify-center">
        {users.map(function(elem){
          return <Card key={elem.id} userData={elem} />
        })}
    </div>
  ) 
}

export default App
