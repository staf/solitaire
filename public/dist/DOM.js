export default class DOM {
    static div(className, children) {
        const el = document.createElement('div');
        if (className) {
            el.className = className;
        }
        if (children) {
            children.forEach(child => {
                if (child instanceof HTMLElement) {
                    el.appendChild(child);
                }
                else {
                    el.innerHTML += child;
                }
            });
        }
        return el;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRE9NLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0RPTS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsT0FBTztJQUNWLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBa0IsRUFBRSxRQUFzQztRQUNqRSxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFRLEtBQUssQ0FBQyxDQUFDO1FBRWhELElBQUksU0FBUyxFQUFFO1lBQ1gsRUFBRSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDNUI7UUFFRCxJQUFJLFFBQVEsRUFBRTtZQUNWLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtvQkFDOUIsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDekI7cUJBQU07b0JBQ0gsRUFBRSxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUM7aUJBQ3pCO1lBQ0wsQ0FBQyxDQUFDLENBQUE7U0FDTDtRQUVELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztDQUNKIn0=