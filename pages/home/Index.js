import Navbar from "../../components/navbar/Navbar";
import SearchBlock from "./SearchBlock";
import FeaturedCollections from "./FeaturedCollections";
import ExclusiveCollection from "./ExclusiveCollection";

export default function Index() {
  return (
    <>
    <Navbar/>
    <SearchBlock/>
    <FeaturedCollections/>
    <ExclusiveCollection/>
    </>
  )
}
