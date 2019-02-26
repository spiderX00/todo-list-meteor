/* Constants */
import taskStateLabels from './Constants';

const Utils = {
    ConditionalSelectColorStyleState() {
        switch (this.state.taskState) {
            case taskStateLabels.PROCESSING:
                return 'warning';
            case taskStateLabels.COMPLETED:
                return 'success';
            default:
                return 'info';
        }
    },

    ConditionalColorStyleState() {
        switch (this.state.taskState) {
            case taskStateLabels.PROCESSING:
                return 'color-warning';
            case taskStateLabels.COMPLETED:
                return 'color-success';
            default:
                return 'color-info';
        }
    },

    ConditionalBorderStyleState() {
        switch (this.state.taskState) {
            case taskStateLabels.PROCESSING:
                return 'border-color-warning';
            case taskStateLabels.COMPLETED:
                return 'border-color-success';
            default:
                return 'border-color-info';
        }
    },
};

export default Utils;
