import React from 'react';
import TagIndexItem from './tag_index_item';

class TagIndex extends React.Component{
  componentDidMount(){
    this.props.fetchTags();
  }

  render(){
    const {tags} = this.props
    return(
      <div>
        <div>
        {
            tags.map(tag =>(
              <TagIndexItem
                tag = {tag}
                key = {tag.id}
              />
            ))
          }
        </div>
      </div>
    )
  }
}