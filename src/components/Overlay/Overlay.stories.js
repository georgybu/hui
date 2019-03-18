import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Overlay } from '../../index';


storiesOf('Overlay', module)
  .add('default', () => (
    <Fragment>
      <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio quidem maiores deleniti recusandae harum adipisci sequi eaque temporibus, magni modi cumque beatae nam voluptatem ex, vitae facilis nostrum. Dolores, debitis.</div>
      <div>Ipsa possimus maxime reiciendis facere eligendi praesentium, quaerat accusamus tempore quos voluptas velit cumque neque qui tempora repellat natus odio culpa laboriosam pariatur dignissimos. Eligendi culpa impedit perspiciatis quam? Quaerat.</div>
      <div><Overlay fullscreen={false} />XXXXXXXXXXXXXXXXXXXCulpa vel dolores itaque nulla et sequi veniam quo impedit, illum sit dolorem esse adipisci ducimus delectus reprehenderit velit asperiores tenetur! Repellat soluta odio accusamus recusandae et aliquam. Maiores, ipsum.</div>
      <div>Beatae aperiam porro officiis blanditiis deleniti neque, ullam sed unde ipsam tempora similique, sint fuga suscipit error. Ad rerum quisquam in minima? Perferendis sapiente id minus earum iure illo sequi!</div>
    </Fragment>
  ))
  .add('fullscreen', () => (
    <Fragment>
      <Overlay fullscreen />
      <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio quidem maiores deleniti recusandae harum adipisci sequi eaque temporibus, magni modi cumque beatae nam voluptatem ex, vitae facilis nostrum. Dolores, debitis.</div>
      <div>Ipsa possimus maxime reiciendis facere eligendi praesentium, quaerat accusamus tempore quos voluptas velit cumque neque qui tempora repellat natus odio culpa laboriosam pariatur dignissimos. Eligendi culpa impedit perspiciatis quam? Quaerat.</div>
      <div>XXXXXXXXXXXXXXXXXXXCulpa vel dolores itaque nulla et sequi veniam quo impedit, illum sit dolorem esse adipisci ducimus delectus reprehenderit velit asperiores tenetur! Repellat soluta odio accusamus recusandae et aliquam. Maiores, ipsum.</div>
      <div>Beatae aperiam porro officiis blanditiis deleniti neque, ullam sed unde ipsam tempora similique, sint fuga suscipit error. Ad rerum quisquam in minima? Perferendis sapiente id minus earum iure illo sequi!</div>
    </Fragment>
  ))
  .add('light', () => (
    <Fragment>
      <Overlay fullscreen light />
      <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio quidem maiores deleniti recusandae harum adipisci sequi eaque temporibus, magni modi cumque beatae nam voluptatem ex, vitae facilis nostrum. Dolores, debitis.</div>
      <div>Ipsa possimus maxime reiciendis facere eligendi praesentium, quaerat accusamus tempore quos voluptas velit cumque neque qui tempora repellat natus odio culpa laboriosam pariatur dignissimos. Eligendi culpa impedit perspiciatis quam? Quaerat.</div>
      <div>XXXXXXXXXXXXXXXXXXXCulpa vel dolores itaque nulla et sequi veniam quo impedit, illum sit dolorem esse adipisci ducimus delectus reprehenderit velit asperiores tenetur! Repellat soluta odio accusamus recusandae et aliquam. Maiores, ipsum.</div>
      <div>Beatae aperiam porro officiis blanditiis deleniti neque, ullam sed unde ipsam tempora similique, sint fuga suscipit error. Ad rerum quisquam in minima? Perferendis sapiente id minus earum iure illo sequi!</div>
    </Fragment>
  ))
