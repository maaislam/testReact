import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';




const App = () => {

  return(

   <div className="ui container comments">


      <ApprovalCard>
        <div>
          <h4>Warning</h4>
          <p>Are You Sure ?</p>
        </div>
      </ApprovalCard>


      <ApprovalCard>
        <CommentDetail 
          avatar = {faker.image.avatar()} 
          author = "Samuel Vince" 
          timeAgo = "Today at 4:00pm" 
          comment = {faker.lorem.sentence()}
          />
     </ApprovalCard>

     <ApprovalCard>
        <CommentDetail 
          avatar = {faker.image.avatar()} 
          author = "Arafat Vin" 
          timeAgo = "Today at 6:00pm" 
          comment = {faker.lorem.sentence()} 
          />
     </ApprovalCard>


     <ApprovalCard>
        <CommentDetail 
          avatar = {faker.image.avatar()} 
          author = "Jane Mia" 
          timeAgo = "Testerday at 7:00pm" 
          comment = {faker.lorem.sentence()} 
          />
    </ApprovalCard>

   </div>
  );

}

ReactDOM.render(<App/>, document.querySelector('#root'));