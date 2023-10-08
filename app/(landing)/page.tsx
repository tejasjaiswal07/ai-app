import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1 className="text-7xl">hello app</h1>

      <Button> click me</Button>

      <UserButton />
    </div>
  );
}
