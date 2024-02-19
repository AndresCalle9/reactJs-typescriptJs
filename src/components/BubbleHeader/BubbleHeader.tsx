import React from 'react';
import './BubbleHeader.scss';

interface BubbleHeaderProps {
  title: string;
  subtitle: string;
  url: string;
  image: string;
  arrow: boolean;
}

const BubbleHeader: React.FC<BubbleHeaderProps> = ({
  title,
  subtitle,
  image,
  url,
  arrow,
}) => {
  return (
    <div className='row' id='bubble-header'>
      <div className='col-md-2'>
        <img src={image} className='d-block mx-auto' alt={title} />
      </div>
      <div className='col-md-10'>
        <div className='h5'>
          {title}
          <br />
          <a href={url} target='_blank'>
            {subtitle}
            {arrow && <i className='bi bi-chevron-right'> </i>}
          </a>
        </div>
      </div>
    </div>
  );
};

export default BubbleHeader;
