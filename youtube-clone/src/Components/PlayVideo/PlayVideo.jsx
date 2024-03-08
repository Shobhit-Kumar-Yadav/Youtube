import React from 'react'
import './PlayVideo.css'
import video from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video} controls autoPlay muted></video>
        <h3>Video Streaming app using react</h3>
        <div className="play-video-info">
            <p>1677 Views &bull; 2 days ago</p>
            <div>
                <span><img src={like} alt=''/>156</span>
                <span><img src={dislike} alt=''/>15</span>
                <span><img src={share} alt=''/>Share</span>
                <span><img src={save} alt=''/>Save</span>
            </div>
        </div>
        <hr/>
        <div className="publisher">
            <img src={jack} alt=''/>
            <div>
                <p>React Library</p>
                 <span>1M Subscriber</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>JavaScript and react </p>
            <p>hi this is a youtube app clone using react</p>
            <hr/>
            <h4>130 Comments</h4>
            <div className="comment">
                <img src={user_profile} alt=''/>
                <div>
                    <h3>Shobhit Yadav <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ullam dolorum at, explicabo, molestias nesciunt veritatis illum qui nemo facere culpa itaque.</p>
                    <div className="comment-action">
                        <img src ={like} alt=''/>
                        <span>255</span>
                        <img src={dislike} alt=''/>
                    </div>
                </div>
            </div>

            <div className="comment">
                <img src={user_profile} alt=''/>
                <div>
                    <h3>Shobhit Yadav <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ullam dolorum at, explicabo, molestias nesciunt veritatis illum qui nemo facere culpa itaque.</p>
                    <div className="comment-action">
                        <img src ={like} alt=''/>
                        <span>255</span>
                        <img src={dislike} alt=''/>
                    </div>
                </div>
            </div>

            <div className="comment">
                <img src={user_profile} alt=''/>
                <div>
                    <h3>Shobhit Yadav <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ullam dolorum at, explicabo, molestias nesciunt veritatis illum qui nemo facere culpa itaque.</p>
                    <div className="comment-action">
                        <img src ={like} alt=''/>
                        <span>255</span>
                        <img src={dislike} alt=''/>
                    </div>
                </div>
            </div>

            <div className="comment">
                <img src={user_profile} alt=''/>
                <div>
                    <h3>Shobhit Yadav <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ullam dolorum at, explicabo, molestias nesciunt veritatis illum qui nemo facere culpa itaque.</p>
                    <div className="comment-action">
                        <img src ={like} alt=''/>
                        <span>255</span>
                        <img src={dislike} alt=''/>
                    </div>
                </div>
            </div>

            <div className="comment">
                <img src={user_profile} alt=''/>
                <div>
                    <h3>Shobhit Yadav <span>1 day ago</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ullam dolorum at, explicabo, molestias nesciunt veritatis illum qui nemo facere culpa itaque.</p>
                    <div className="comment-action">
                        <img src ={like} alt=''/>
                        <span>255</span>
                        <img src={dislike} alt=''/>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default PlayVideo