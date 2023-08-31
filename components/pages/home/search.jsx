import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Search() {
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-row gap-2.5  w-max ">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Latest</SelectItem>
            <SelectItem value="dark">Popular</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Input className="w-80" placeholder="Search" />
      </div>
    </main>
  );
}
export default Search;
