var GetMoreQnA;(function(n){var t=function(){function n(n){var t=this,i;for(this.ignoreFetchClassName="df_ignore",this.closeModuleClassName="df_close",this.expansionElementClassName="b_expansion_wrapper",this.expansionElementSelector=".df_alsoAsk .b_module_expansion",this.transitionSelector="#df_moreqna > div:not(.transform)",this.moreQnAContainerName="df_moreqna",this.moreQnALoaderName="df_load",this.hideElementClassName="b_hide",this.fetchSpinnerIconUrl="rqna/fetchSpinnerIcon",this.imgContent="imgContent",this.AjaxParams={url:null,callback:null},this.CallComplete=!1,this.GetMoreQnAUrl=n,this.MoreQnAContainer=_ge(this.moreQnAContainerName),this.MoreQnALoader=_ge(this.moreQnALoaderName),this.QnAList=_d.querySelectorAll(this.expansionElementSelector),this.QnAFetchCount=0,this.QnACount=this.QnAList.length,i=0;i<this.QnAList.length;i++)sj_be(this.QnAList[i],"click",function(n){return t.getMoreQnA(n.currentTarget)}),sj_be(this.QnAList[i],"keyup",function(n){return t.handleKeyboardEvent(n)});sj_be(_w,"scroll",function(){return t.delayedFetch()});sj_be(_w,"resize",function(){return t.delayedFetch()});sj_be(_w,"keydown",function(n){return t.disableScrollOnSpaceBar(n)});sj_evt.bind("onP1",function(){return t.fetchSpinnerIcon()},!0)}return n.prototype.handleKeyboardEvent=function(n){(n.keyCode===13||n.keyCode===32)&&this.getMoreQnA(n.currentTarget)},n.prototype.disableScrollOnSpaceBar=function(n){n.keyCode===32&&_d.activeElement.className.indexOf(this.expansionElementClassName)!==-1&&sj_pd(n)},n.prototype.getMoreQnA=function(n){var i=this,t=n.parentElement.parentElement;if(n==this.PreviousTarget&&!this.CallComplete){this.handleCloseModule(t);return}if(this.PreviousTarget=n,t.className.indexOf(this.closeModuleClassName)!==-1)sa_cl(t,this.closeModuleClassName,!1);else{this.handleCloseModule(t);return}if(t.className.indexOf(this.ignoreFetchClassName)===-1){sa_cl(this.MoreQnALoader,this.hideElementClassName,!1);var u=t.getAttribute("data-query"),f=t.getAttribute("data-IID"),r=function(n,r){return i.requestCallBack(n,r,t)};this.AjaxParams={url:this.GetMoreQnAUrl+u+"&IID="+f,callback:r};setTimeout(function(){i.isQnABottomScrolledIntoView()&&(i.CallComplete=!1,sj_ajax(i.AjaxParams.url,{callback:r}),i.AjaxParams={url:null,callback:null},i.QnAFetchCount++)},200)}},n.prototype.fetchSpinnerIcon=function(){var n=this,t=function(t,i){return n.fetchSpinnerCallBack(t,i)};sj_ajax(this.fetchSpinnerIconUrl,{callback:t})},n.prototype.fetchSpinnerCallBack=function(n,t){n&&t.appendTo(this.MoreQnALoader)},n.prototype.requestCallBack=function(n,t,i){var u=this,r;if(n){t.appendTo(this.MoreQnAContainer);this.animateDivs();this.QnAList=_d.querySelectorAll(this.expansionElementSelector);var f="",o=function(n){sj_be(e.QnAList[n],"click",function(){return u.getMoreQnA(u.QnAList[n])});sj_be(e.QnAList[n],"keyup",function(n){return u.handleKeyboardEvent(n)});f==""&&(f=e.QnAList[n].parentElement.parentElement.getAttribute("data-ParentIID"),i.setAttribute("data-IID",f))},e=this;for(r=this.QnACount;r<this.QnAList.length;r++)o(r);this.QnACount=this.QnAList.length;typeof rms!="undefined"&&rms.start()}else sa_cl(i,this.ignoreFetchClassName,!0),Log.Log("CI.MoreQnA","MoreQnAFetch","FetchFailed",!1,"Url",this.GetMoreQnAUrl),this.hideLoader();this.QnAFetchCount--;this.CallComplete=!0;this.hideLoader()},n.prototype.isQnABottomScrolledIntoView=function(){var n=this.MoreQnAContainer.getBoundingClientRect();return n.bottom<=_w.innerHeight},n.prototype.hideLoader=function(){this.QnAFetchCount==0&&sa_cl(this.MoreQnALoader,this.hideElementClassName,!0)},n.prototype.delayedFetch=function(){this.AjaxParams.url!=null&&this.AjaxParams.callback!=null&&this.isQnABottomScrolledIntoView()&&(sj_ajax(this.AjaxParams.url,{callback:this.AjaxParams.callback}),this.AjaxParams={url:null,callback:null},this.QnAFetchCount++)},n.prototype.animateDivs=function(){var n=this;setTimeout(function(){for(var i=_d.querySelectorAll(n.transitionSelector),t=0;t<i.length;t++)sa_cl(i[t],"transform",!0)},100)},n.prototype.handleCloseModule=function(n){var i=this,t;sa_cl(n,this.closeModuleClassName,!0);t=n.getElementsByClassName("df_imgCont")[0];t&&t.getAttribute(this.imgContent)!=null&&(t.innerHTML=t.getAttribute(this.imgContent),t.removeAttribute(this.imgContent));setTimeout(function(){return i.delayedFetch()},500)},n}();n.QnAFetcher=t;sj_evt.fire("OnGetMoreQnAInitComplete")})(GetMoreQnA||(GetMoreQnA={}))