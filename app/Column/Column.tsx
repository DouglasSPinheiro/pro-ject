import "./CollumnStyle.scss"

// const styles = require("./CollumnStyle.scss")

interface TagComponentProps{
  tagData: TagData
}
interface TagList{
  list:TagData[]
}
function Tag ({tagData}:TagComponentProps){
  return(
    <div style={{background:tagData.color}} className="Tag ">
      {tagData.name}
    </div>
  )
}

function Card(){
  const  tagData = {
    id: 1,
    color: "#ff22aa",
    name: "tagnamex"
  };
  const  tagData2 = {
    id: 2,
    color: "#22aaff",
    name: "newTagy"
  };
  const tags = [tagData,tagData2];
  return(
    <div className="Card">
      <h1 > Card Title </h1> 
      
      <div style={{padding:'20 px'}}> Description</div>
      
      <ul className="TagList">
        {
          tags.map((tag)=>
           <li key={tag.id}>
            <Tag tagData={tag}></Tag>
          </li>
          )
        }      
      </ul>
    </div>
  )
}
export default function Collumn() {
      return(
      <div className="container">        
          <h1 className="Title" >ToDo</h1>
          <Card></Card>
      </div>
      )
  }

