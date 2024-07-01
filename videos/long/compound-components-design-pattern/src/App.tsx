import PostCard from './components/PostCard';

export default function HomeFeedScreen() {
  return (
    <div>
      <PostCard
        post={{
          id: 1,
          title: 'PostCard Project',
          content: 'This is the first post on our new blog.',
          user: {
            id: 1,
            name: 'John Doe',
          },
        }}
      >
        <PostCard.Title />
        <PostCard.Content />
        <PostCard.User />
        <PostCard.Buttons />
      </PostCard>
      <div>
        <button onClick={() => {
          console.log("You have worked on PostCard");

        }}>Toggle Post Card Title</button>
      </div>
    </div>
  );
}
