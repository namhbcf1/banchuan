// Performance calculation functions
const calculateGamePerformance = (cpuScore, gpuScore) => {
    const totalScore = (cpuScore * 0.4 + gpuScore * 0.6);
    if (totalScore >= 90) return 'Excellent';
    if (totalScore >= 75) return 'Very Good';
    if (totalScore >= 60) return 'Good';
    if (totalScore >= 45) return 'Average';
    return 'Below Average';
};

const calculateGraphicsPerformance = (cpuScore, gpuScore) => {
    const totalScore = (cpuScore * 0.3 + gpuScore * 0.7);
    if (totalScore >= 90) return 'Excellent';
    if (totalScore >= 75) return 'Very Good';
    if (totalScore >= 60) return 'Good';
    if (totalScore >= 45) return 'Average';
    return 'Below Average';
};

const calculateOfficePerformance = (cpuScore, gpuScore) => {
    const totalScore = (cpuScore * 0.7 + gpuScore * 0.3);
    if (totalScore >= 90) return 'Excellent';
    if (totalScore >= 75) return 'Very Good';
    if (totalScore >= 60) return 'Good';
    if (totalScore >= 45) return 'Average';
    return 'Below Average';
};

const calculateBottleneck = (cpuScore, gpuScore) => {
    const difference = Math.abs(cpuScore - gpuScore);
    if (difference <= 10) return 'None';
    if (difference <= 20) return 'Minor';
    if (difference <= 30) return 'Moderate';
    return 'Severe';
};

const calculateStability = (cpuScore, gpuScore) => {
    const totalScore = (cpuScore + gpuScore) / 2;
    if (totalScore >= 90) return 'Excellent';
    if (totalScore >= 75) return 'Very Good';
    if (totalScore >= 60) return 'Good';
    if (totalScore >= 45) return 'Average';
    return 'Below Average';
};

const generatePerformanceTips = (gameType, cpuScore, gpuScore) => {
    const tips = [];
    
    // CPU related tips
    if (cpuScore < 60) {
        tips.push('Consider upgrading your CPU for better performance');
    }
    
    // GPU related tips
    if (gpuScore < 60) {
        tips.push('Your GPU might be limiting gaming performance');
    }
    
    // Game type specific tips
    if (gameType === 'gaming') {
        if (gpuScore < 70) {
            tips.push('For better gaming experience, consider a more powerful GPU');
        }
    } else if (gameType === 'office') {
        if (cpuScore < 70) {
            tips.push('For office work, a better CPU would improve multitasking');
        }
    }
    
    // Bottleneck tips
    const bottleneck = calculateBottleneck(cpuScore, gpuScore);
    if (bottleneck === 'Severe') {
        tips.push('There is a severe bottleneck between CPU and GPU. Consider balancing your components');
    }
    
    return tips;
};

module.exports = {
    calculateGamePerformance,
    calculateGraphicsPerformance,
    calculateOfficePerformance,
    calculateBottleneck,
    calculateStability,
    generatePerformanceTips
}; 