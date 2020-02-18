import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width:960px;
    margin: 0 auto;
    // background:red;
    overflow:hidden;
`
export const HomeLeft = styled.div`
    width:625px;
    padding-top:30px;
    margin-left:15px;
    float:left;
    // background:blue;
    .bannerImg{
        width:625px;
        height:270px;
    }
`
export const HomeRight = styled.div`
    width:250px;
    float:right;
    // background:green;
`
export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -18px;
	border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
	float: left;
	height: 32px;
	line-height: 32px;
	margin-left: 18px;
	margin-bottom: 18px;
	padding-right: 10px
	background: #f7f7f7;
	font-size: 14px;
	color: #000;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	.topic-pic {
		display: block;
		float: left;
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`;
export const ListItem = styled.div`
	border-bottom: 1px solid #dcdcdc;
	padding:20px 0;
	overflow:hidden;
	&::a{
		text-decoration:none;
	}
	.ItemImg{
		display:block;
		float:right;
		width:150px;
		height:100px;
		border-radius: 10px;
	}
`
export const ItemInfo = styled.div`
	float:left;
	width:475px;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`

