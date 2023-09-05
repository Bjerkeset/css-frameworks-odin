import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


/**
 * Adds a search bar to the feed page using shadcn's component.
 * @author Krystian
 */

function Search() {
  return (
    <main className="flex items-center justify-center my-10 ">
      <div className="flex gap-2.5">
        <Select>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Latest</SelectItem>
            <SelectItem value="dark">Popular</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Input className=" max-w-[400px]" placeholder="Search" />
      </div>
    </main>
  );
}
export default Search;
