import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-16">
      <h1 className="text-[40px] font-medium text-neutral-900">
        Good morning, Jonathan
      </h1>
      <Button size="lg" variant="secondary" className="font-bold">
        Create collection
      </Button>
    </div>
  );
};

export default Header;
